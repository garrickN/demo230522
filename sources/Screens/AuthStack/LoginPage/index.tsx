import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
} from 'react-native';
import styles from './style';
import AppTextInput from '../../../Components/AppTextInput/AppTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OInputValid } from './InputValid';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../../../Helpers/AppLanguage/i18n';
// import i18n from '../../../Helpers/AppLanguage/i18n';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../ThemeStack/index';
import { Headline, Button } from 'react-native-paper';

interface LoginScreenProps {
  navigation: any;
}

const LoginPage = (props: LoginScreenProps) => {

  const { t } = useTranslation();
  // const [currentLanguage, setLanguage] = useState('en');

  // const changeLanguage = value => {
  //   i18n
  //     .changeLanguage(value)
  //     .then(() => setLanguage(value))
  //     .catch(err => console.log(err));
  // };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessAccount, setAccess] = useState(false);
  const [inputRef, setInputRef] = React.useState<OInputValid | null>();
  const [inputPasswordRef, setInputPasswordRef] = React.useState<OInputValid | null>();
  const getValue = React.useMemo(()=> inputRef?.getValue,[inputRef]);
  const getPasswordValue = React.useMemo(()=> inputPasswordRef?.getValue,[inputPasswordRef]);
  const getValid = React.useMemo(()=> inputRef?.getValid,[inputRef]);
  const getPasswordValid = React.useMemo(()=> inputPasswordRef?.getValid,[inputPasswordRef]);

  const {toggleThemeType, themeType, isDarkTheme, theme} = useTheme();

  React.useEffect(()=> {
    console.log('acc', getValue, getValid);
    console.log('pass', getPasswordValue, getPasswordValid);
  }, [getValue, getPasswordValue, getValid, getPasswordValid]);


  function handleEmailInputChange(text: string){
    setEmail(text);
  }

  function handlePasswordInputChange(text: string) {
    setPassword(text);
  }

  const getData = async () => {
    try {
      const dataEmail = await AsyncStorage.getItem('email');
      const dataPassword = await AsyncStorage.getItem('password');
      console.log('data:', dataEmail, dataPassword);
      if ((email === dataEmail) && (password === dataPassword)) {
        setAccess(true);
      } else {setAccess(false);}
    } catch (e) {
      // error reading value
    }
  };

  // const createButtonAlert = () =>
  //   Alert.alert('Cảnh báo', 'Bạn nhập thiếu ký tự rồi', [
  //     {text: 'OK', onPress: () => console.log('OK Pressed')},
  // ]);

  const createAccessAlert = () =>
    Alert.alert(
      'Cảnh báo',
      'Bạn nhập sai tài khoản hoặc mật khẩu, thử lại xem',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
  );

  const register = () => props.navigation.navigate('Register');

  const contact = () => {
      getData();
      console.log('Người dùng đã nhấn nút!');
      if (accessAccount) {
        props.navigation.navigate('Contact');
      } else {createAccessAlert();}
  };

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <GestureHandlerRootView style={styles.backgroundContainer}>
        <View style={styles.viewContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                  <View>
                    <View style={[styles.container, {backgroundColor: theme.colors.newPrimary}]}>
                      <View style={styles.viewText}>
                        <Text style={styles.title}>{t('labels.welcomeTitle', { name: 'John' })}</Text>
                        <Text style={styles.content}>
                        {t('labels.title')}
                        </Text>
                      </View>
                      <View style={styles.viewTextInput}>
                        <Button mode="contained" onPress={toggleThemeType}>Toggle Theme</Button>
                        <Headline>{themeType}</Headline>
                        <Headline>isDarkTheme: {`${isDarkTheme}`}</Headline>
                        <Headline>Primary: {theme.colors.red}</Headline>
                        <AppTextInput
                          label="E-mail"
                          placeHolder="Input Email"
                          ref={setInputRef}
                          value = {6}
                          onChangeTextCallback={handleEmailInputChange} />
                        <AppTextInput
                          label="Password"
                          placeHolder="Input Password"
                          ref = {setInputPasswordRef}
                          value = {6}
                          isPassword = {true}
                          onChangeTextCallback={handlePasswordInputChange} />
                      </View>
                    </View>
                  </View>
                </ScrollView>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          <View style = {styles.viewBottomContainer}>
            <TouchableOpacity
              style = {styles.button}
              onPress = {contact}
              disabled = {(getValid && getPasswordValid) ? false : true}
              >
              <Text style = {styles.text}>Login</Text>
            </TouchableOpacity>

            <View style = {styles.conditionContainer}>
              <Text>
                By signing in, I agree with Terms of Use and Privacy Policy.
              </Text>
              <TouchableOpacity onPress={register}>
                <Text style={styles.registerText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default LoginPage;
