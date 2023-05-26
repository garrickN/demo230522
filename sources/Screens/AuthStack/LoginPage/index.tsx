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
} from 'react-native';
import styles from './style';
import TextInput1 from '../../../Components/AppTextInput/AppTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginScreenProps {
  navigation: any;
}

const LoginPage = (props: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [accessAccount, setAccess] = useState(false);
  console.log(email, password);

  useEffect(() => {
    getData();
  });

  const handleEmailInputChange = (text: React.SetStateAction<string>) => {
    setEmail(text);
    setButtonDisabled(!(text.length === 6 && password.length === 6));
  };

  const handlePasswordInputChange = (text: React.SetStateAction<string>) => {
    setPassword(text);
    setButtonDisabled(!(email.length === 6 && text.length === 6));
  };

  const getData = async () => {
    try {
      const dataEmail = await AsyncStorage.getItem('email');
      const dataPassword = await AsyncStorage.getItem('password');
      console.log('data:', dataEmail, dataPassword);

      if (dataEmail === email && dataPassword === password) {
        // value previously stored
        setAccess(true);
      } else setAccess(false);
    } catch (e) {
      // error reading value
    }
  };

  // const createButtonAlert = () =>
  //   Alert.alert('Cảnh báo', 'Bạn nhập thiếu ký tự rồi', [
  //     {text: 'OK', onPress: () => console.log('OK Pressed')},
  //   ]);

  const createAccessAlert = () =>
    Alert.alert(
      'Cảnh báo',
      'Bạn nhập sai tài khoản hoặc mật khẩu, thử lại xem',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    );

  const register = () => props.navigation.navigate('Register');
  const contact = () => {
    console.log(buttonDisabled);

    //if (!buttonDisabled)
      getData();
      console.log('Người dùng đã nhấn nút!');
      if (accessAccount) {
        props.navigation.navigate('Contact');
      } else createAccessAlert();
    //else createButtonAlert();
  };

  return (
    <SafeAreaView>
      <View style={styles.backgroundContainer}>
        <View style={styles.avoidViewContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.container}>
                <View style={styles.container1}>
                  <View style={styles.view1}>
                    <Text style={styles.title}>Let's Start Here</Text>
                    <Text style={styles.content}>
                      Fill in your details to begin
                    </Text>
                  </View>
                  <View style={styles.view2}>
                    <TextInput1
                      label="E-mail"
                      placeholder="Input Email"
                      value={email}
                      onChangeText={handleEmailInputChange} />
                    <TextInput1
                      label="Password"
                      placeholder="Input Password"
                      value={password}
                      onChangeText={handlePasswordInputChange} />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>

        <View style={styles.container2}>
          <View style={styles.view3}>
            <TouchableOpacity
              style={styles.button}
              onPress={contact}
              //disabled={buttonDisabled}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>

            <View style={styles.conditionContainer}>
              <Text>
                By signing in, I agree with Terms of Use and Privacy Policy.
                <TouchableOpacity onPress={register}>
                  <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
