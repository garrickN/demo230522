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
import Button1 from '../../../Components/AppButton/Button';
import TextInput1 from '../../../Components/AppTextInput/AppTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface RegisterScreenProps {
  navigation: any;
}

const RegisterPage = (props: RegisterScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [registerFailed, setRegisterFailed] = useState(true);

  console.log(
    email.length,
    password.length,
    confirmPassword.length,
    fullname.length,
    phoneNumber.length,
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
      setRegisterFailed(false);
      createFailedAlert();
      console.log('Lỗi khi lưu giá trị:', error);
    }
  };

  const handleEmailInputChange = (text: React.SetStateAction<string>) => {
    setEmail(text);
    setButtonDisabled(!(text.length === 6 && password.length === 6));
  };

  const handlePasswordInputChange = (text: React.SetStateAction<string>) => {
    setPassword(text);
    setButtonDisabled(!(email.length === 6 && text.length === 6));
  };
  const handleConfirmPasswordInputChange = (
    text: React.SetStateAction<string>,
  ) => {
    setConfirmPassword(text);
    setButtonDisabled(!(email.length === 6 && password.length === 6));
  };

  const handleFullnameInputChange = (text: React.SetStateAction<string>) => {
    setFullname(text);
    setButtonDisabled(!(email.length === 6 && password.length === 6));
  };
  const handlePhoneNumberInputChange = (text: React.SetStateAction<string>) => {
    setPhoneNumber(text);
    setButtonDisabled(!(password.length === 6 && email.length === 6));
  };

  const login = () => {
    if (buttonDisabled) {
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
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidView}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container1}>
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
                  <TextInput1
                    label="Password"
                    placeholder="Enter password"
                    value={password}
                    onChangeText={handlePasswordInputChange} />
                  <TextInput1
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={
                      handleConfirmPasswordInputChange
                    } />
                  <TextInput1
                    label="Full Name"
                    placeholder="Enter Full Name"
                    value={fullname}
                    onChangeText={handleFullnameInputChange} />
                  <TextInput1
                    label="Phone Number"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChangeText={handlePhoneNumberInputChange} />
                  <TextInput1
                    label="Email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChangeText={handleEmailInputChange} />
                </View>
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>

      <View style={styles.container2}>
        <View style={styles.view3}>
          <Button1
            label="Complete Register"
            onPress={login}
            disabled={!buttonDisabled} />
          <Text style={styles.conditionContainer}>
            By signing in, I agree with Terms of Use and Privacy Policy
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterPage;
