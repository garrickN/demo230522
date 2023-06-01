import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, PermissionsAndroid, TouchableOpacity, TextInput, SafeAreaView, Alert, BackHandler, Image} from 'react-native';
import Contacts , {Contact} from 'react-native-contacts';
import styles from './style';
import abbrev_name from '../../../Utils/GenerateName';
import unidecode from 'unidecode';
import AppHeaderBar from '../../../Components/AppHeaderBar/AppHeaderBar';
import { Box, Input } from 'pmn-core-module';

interface InformationScreenProps {
    route: any;
    navigation: any;
  }

const ItemInformation = (props: any) =>{
    return (
        <View style={styles.viewItemInformation}>
            <View style={styles.viewItemAvatar}>
                <Image  
                style={styles.avatarIcon}
                source={props.source}/>
                <TouchableOpacity style={styles.viewTouch}>
                    <Image  
                    style={styles.cameraIcon}
                    source={props.source2}/>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.textName}>{props.name}</Text>
                <Text style={styles.textNumber}>{props.number}</Text>
            </View>         
        </View>
    );
}

const ItemTask = (props: any) =>{
    return (
        <View style = {styles.viewContainerItemsTask}>
            <View style={styles.viewItemTask}>
                <View style={styles.viewNameItemTask}>
                    <Text style={props.styleName}>{props.nameTask}</Text>
                    {props.nameIcon}
                </View>    
                <View style={styles.viewIconTask}>
                    <TouchableOpacity>
                        <Image  
                        style={props.styleButton ?? styles.nextPageButton}
                        source={props.source ?? require('../../../Assets/Images/next.png')}/>
                    </TouchableOpacity>
                    {props.itemIcon}
                </View> 
            </View>
            <View style={styles.viewItemNoteTask}>
                {props.contentNote}
            </View>
        </View>
        
    );
}

const MyInformationScreen = (props: InformationScreenProps) => {
    const contact = () => props.navigation.navigate('Contact');
    return (
        <SafeAreaView>
           <View style={styles.viewContainer}>
                <AppHeaderBar 
                    label='Thông tin cá nhân'
                    onPress = {() => props.navigation.navigate("Contact")}    
                />
                <ItemInformation 
                source = {require('../../../Assets/Images/AvatarIcon.png')} 
                source2 = {require('../../../Assets/Images/camera.png')}
                name = {props.route.params.contact.displayName}
                number = {props.route.params.contact.phoneNumbers[0].number}
                />
                <ItemTask
                nameTask = "Mã QR của tôi"
                styleName = {styles.textNameTask}
                itemIcon = {
                    <Image  
                    style={{width: 30, height: 30, tintColor: '#6b6ace', marginTop: 10}}
                    source={require('../../../Assets/Images/qr-code.png')}/>
                }/>
                <ItemTask
                nameTask = "Trạng thái tài khoản"
                styleName = {styles.textNameTask}
                itemIcon = {
                    <View style = {styles.boxStatus}>
                        <Text style={styles.textStatus}> Chưa xác thực</Text>
                    </View>
                }/>
                <ItemTask
                nameTask = "Hạn mức giao dịch"
                styleName = {styles.textNormalNameTask}
                styleButton = {styles.nextPageButtonBlue}
                itemIcon = {
                    <Text style={styles.textLink}>Chi tiết</Text>
                }/>
                <ItemTask
                nameTask = "Email"
                styleName = {styles.textNameTask}
                nameIcon = {
                    <Image  
                    style={{width: 25, height: 25, margin: 15,}}
                    source={require('../../../Assets/Images/warning.png')}/>
                }
                itemIcon = {
                    <Text style = {styles.textNormalNameTask}>Chưa xác thực email</Text>
                }
                contentNote = {
                    <Text style = {styles.textContent}>Xác thực email để nhận hóa đơn điện tử, cảnh báo mật khẩu và
                     khôi phục tài khoản khi quên mật khẩu.</Text>
                }/>
               {/* <Box width={20} height={20} color={'red'} />
               <Input  value={'ádasasd'} size={10} /> */}
           </View>
        </SafeAreaView>
    );
}

export default MyInformationScreen;