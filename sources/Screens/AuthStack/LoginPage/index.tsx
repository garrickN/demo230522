import React, {useEffect, useState} from 'react';
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
import InputValid, { OInputValid } from './InputValid';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface LoginScreenProps {
  navigation: any;
}

const LoginPage = (props: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessAccount, setAccess] = useState(false);
  const [inputRef, setInputRef] = React.useState<OInputValid | null>();
  const [inputPasswordRef, setInputPasswordRef] = React.useState<OInputValid | null>();
  const getValue = React.useMemo(()=> inputRef?.getValue,[inputRef])
  const getPasswordValue = React.useMemo(()=> inputPasswordRef?.getValue,[inputPasswordRef])
  const getValid = React.useMemo(()=> inputRef?.getValid,[inputRef])
  const getPasswordValid = React.useMemo(()=> inputPasswordRef?.getValid,[inputPasswordRef])

  React.useEffect(()=> {
    console.log("acc", getValue, getValid),
    console.log('pass', getPasswordValue, getPasswordValid)
  }, [getValue, getPasswordValue, getValid, getPasswordValid])


  function handleEmailInputChange(text: string){
    setEmail(text);
  };

  function handlePasswordInputChange(text: string) {
    setPassword(text);
  };

  const getData = async () => {
    try {
      const dataEmail = await AsyncStorage.getItem('email');
      const dataPassword = await AsyncStorage.getItem('password');
      console.log('data:', dataEmail, dataPassword);
      if((email == dataEmail) && (password == dataPassword)) {
        setAccess(true)
      }else {setAccess(false)}
    } catch (e) {
      // error reading value
    }
  };

  const createButtonAlert = () =>
    Alert.alert('Cảnh báo', 'Bạn nhập thiếu ký tự rồi', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

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
      } else createAccessAlert();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.viewContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                  <View>
                    <View style={styles.container}>
                      <View style={styles.viewText}>
                        <Text style={styles.title}>Let's Start Here</Text>
                        <Text style={styles.content}>
                          Fill in your details to begin
                        </Text>
                      </View>
                      <View style={styles.viewTextInput}>
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
              disabled = {(getValid && getPasswordValid)? false : true}
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
