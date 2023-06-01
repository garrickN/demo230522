import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, PermissionsAndroid, TouchableOpacity, TextInput, SafeAreaView, Alert, BackHandler, Image} from 'react-native';
import Contacts , {Contact} from 'react-native-contacts';
import styles from './style';
import abbrev_name from '../../../Utils/GenerateName';
import unidecode from 'unidecode';

interface ContactScreenProps {
  navigation: any;
}

type ItemProps = {
  item: Contact;
  onPress: () => void;
  backgroundColor1: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor1, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={[styles.rowItem, {backgroundColor: backgroundColor1}]}>
      <View style={[styles.viewIcon]}>
        <Text style={[styles.nameIcon]}>{abbrev_name(item.displayName)}</Text>
      </View>
      <View style={[styles.viewDetail]}>
        <Text style={[styles.title, {color: textColor}]}>{item.displayName}</Text>
        <Text style={[styles.content, {color: textColor}]}>{item.phoneNumbers[0].number}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const MyContactsScreen = (props: ContactScreenProps) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState<Contact[]>([]);
  const [masterDataSource, setMasterDataSource] = useState<Contact[]>([]);
  const [selectedId, setSelectedId] = useState<string>();

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [iconsColor, setIcons] = useState([]);

  const login = () => props.navigation.navigate('Login');

  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
      })
      .then((res) => {
          console.log('Permission: ', res);
          Contacts.getAll()
              .then(async (contacts) => {
                  // work with contacts
                  const contactsData: Contact[] = await Contacts.getAll();
                  setContacts(contactsData);
                  console.log(contacts);
                  setFilteredDataSource(contactsData);
                  setMasterDataSource(contactsData);
              })
              .catch((e) => {
                  console.log(e);
              });
      })
      .catch((error) => {
          console.error('Permission error: ', error);
    });

    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const renderItem = ({item}: {item: Contact}) => {
    const backgroundColor1 = item.recordID === selectedId ? '#6e3b6e' : 'white';
    const color = item.recordID === selectedId ? 'white' : 'black';
    let contact = contacts.find(elements => elements.recordID === item.recordID);

    return (
      <Item
        item={item}
        onPress={() => {
          handleSelectItem(item.recordID, contact!)
          console.log(contact);
        }}
        backgroundColor1 = {backgroundColor1}
        textColor={color}
      />
    );
  };

  function handleSelectItem(contactId: string, contact: Contact) {
    setSelectedId(contactId);
    getInformation(contact);
  };

  const convertToPlainString = (str: string) => {
    return unidecode(str);
  };

  const searchFilterFunction = (text: string) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = convertToPlainString(item.displayName)
          ? convertToPlainString(item.displayName.toUpperCase())
          : ''.toUpperCase();
        console.log('phoneNumber: ', item?.phoneNumbers);
        const phoneNumberData = item?.phoneNumbers[0]?.number.replace(/[`W•√π÷×¶∆£¢€¥°©®™✓~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\{ }/]/gi, '');
        console.log('Phone Number: ', phoneNumberData);
        const textData = text.toUpperCase();
        return phoneNumberData.indexOf(textData) > -1  || itemData.indexOf(textData) > -1;
      });
      console.log(newData);
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  function getInformation(contact: Contact) {
    props.navigation.navigate(
      'Information',
      { contact },
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.rowSearch}>
          <View style={styles.containerBackBtn}>
            <TouchableOpacity
              onPress={login}>
              <Image
                style={styles.tinyLogo}
                source={require('../../../Assets/Images/back.png')}
              />
            </TouchableOpacity>
          </View>
          <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Nhập tên hoặc số điện thoại"
          />
        </View>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item) => item.recordID}
          renderItem={renderItem}
          extraData={selectedId}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyContactsScreen;



