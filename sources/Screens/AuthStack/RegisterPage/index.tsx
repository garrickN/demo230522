import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './style';
import AppButton from '../../../Components/AppButton/AppButton';
import AppTextInput, { OInputValid } from '../../../Components/AppTextInput/AppTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from '../../ThemeStack/index';

interface RegisterScreenProps {
  navigation: any;
}

const RegisterPage = (props: RegisterScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [inputRef, setInputRef] = React.useState<OInputValid | null>();
  const [inputPasswordRef, setInputPasswordRef] = React.useState<OInputValid | null>();
  const getValue = React.useMemo(()=> inputRef?.getValue,[inputRef]);
  const getPasswordValue = React.useMemo(()=> inputPasswordRef?.getValue,[inputPasswordRef]);
  const getValid = React.useMemo(()=> inputRef?.getValid,[inputRef]);
  const getPasswordValid = React.useMemo(()=> inputPasswordRef?.getValid,[inputPasswordRef]);

  const {toggleThemeType, themeType, isDarkTheme, theme} = useTheme();

  console.log(
    email.length,
    password.length,
    confirmPassword.length,
    fullname.length,
    phoneNumber.length,
    'acc', getValue, getValid,
    'pass', getPasswordValue, getPasswordValid,
  );

  const setData = async () => {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      await AsyncStorage.setItem('fullname', fullname);
      await AsyncStorage.setItem('phoneNumber', phoneNumber);

      //setRegisterFailed(true);
      createSuccessAlert();
      console.log(
        'Giá trị đã được lưu ',
        email,
        password,
        fullname,
        phoneNumber,
      );
    } catch (error) {
      createFailedAlert();
      console.log('Lỗi khi lưu giá trị:', error);
    }
  };

  function handleEmailInputChange(text: string){
    setEmail(text);
  }

  function handlePasswordInputChange(text: string){
    setPassword(text);
  }

  function handleConfirmPasswordInputChange(text: string){
    setConfirmPassword(text);
  }

  function handleFullnameInputChange(text: string){
    setFullname(text);
  }

  function handlePhoneNumberInputChange(text: string){
    setPhoneNumber(text);
  }

  const login = () => {
    if (getValid && getPasswordValid) {
      setData();
      console.log('Regis Success');
    } else {createFailedRegisAlert();}
  };

  const createFailedRegisAlert = () =>
    Alert.alert(
      'Cảnh báo',
      'Có vấn đề gì đó không đúng. Xin vui lòng thử lại',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    );

  const createFailedAlert = () =>
    Alert.alert('Cảnh báo', 'Đăng ký đã bị lỗi. Xin vui lòng thử lại', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createSuccessAlert = () =>
    Alert.alert('Thông báo', 'Bạn đăng ký thành công', [
      {text: 'OK', onPress: navigate},
    ]);

  const navigate = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.avoidViewContainer}>
        <KeyboardAwareScrollView
          enableOnAndroid = {true}
          style = {{flex: 1}}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={[styles.container1, {backgroundColor: theme.colors.red}]}>
                <ScrollView>
                  <View style={styles.view1}>
                    <Text style={styles.title}>
                      Enter Registration Information
                    </Text>
                    <Text style={styles.content}>
                      Please enter information to register an account
                    </Text>
                  </View>
                  <View style={styles.view2}>
                    <AppTextInput
                      label="Password"
                      placeHolder="Enter password"
                      ref = {setInputPasswordRef}
                      value = {6}
                      isPassword = {true}
                      onChangeTextCallback={handlePasswordInputChange} />
                    <AppTextInput
                      label="Confirm Password"
                      placeHolder="Confirm Password"
                      isPassword = {true}
                      onChangeTextCallback={
                        handleConfirmPasswordInputChange
                      }/>
                    <AppTextInput
                      label="Full Name"
                      placeHolder="Enter Full Name"
                      onChangeTextCallback={handleFullnameInputChange} />
                    <AppTextInput
                      label="Phone Number"
                      placeHolder="Enter Phone Number"
                      onChangeTextCallback={handlePhoneNumberInputChange} />
                    <AppTextInput
                      label="Email"
                      placeHolder="Enter Your Email"
                      ref = {setInputRef}
                      value = {6}
                      onChangeTextCallback={handleEmailInputChange} />
                  </View>
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </KeyboardAwareScrollView>
      </View>

      <View style={styles.container2}>
        <View style={styles.view3}>
          <AppButton
            label="Complete Register"
            onPress={login}/>
          <Text style={styles.conditionContainer}>
            By signing in, I agree with Terms of Use and Privacy Policy
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterPage;
