import React ,
{
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9f8',
    width: '100%',
    borderRadius: 5,
    marginVertical: 10,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#878686',
    width: '90%',
    marginLeft: 12,
    marginTop: 5,
  },

  inputForm: {
    color: 'black',
    height: 40,
    marginLeft: 10,
    borderRadius: 5,
    fontSize: 12,
  },

  inputFocused: {
    borderColor: '#3079FF',
    borderWidth: 0.5,
  },
  touchView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 6,
    flex: 0.1,
  },
  iconHide: {
    width: 20,
    height: 20,
  },
});

export type IInputValid ={
  value?: number,
  label?: string,
  placeHolder?: string,
  isPassword?: boolean,
  onChangeTextCallback?: (text: string) => void,
}
export type OInputValid = {
  getValue:  string,
  getValid: boolean,
}

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility,
  };
};

const AppTextInput = forwardRef<OInputValid, IInputValid>((props, ref) => {
  const {value} = props;
  const [input, setInput] = useState<string>('');
  const [valid, setValid] = useState<boolean>(false);
  const [focused, setFocused] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  useEffect(()=>{
    if (input.length >= value! ?? 0)
    {
        setValid(true);
    }
    else {setValid(false);}
  },[value,input]);

  useImperativeHandle(ref,() => ({
      getValue: input,
      getValid: valid,
  }), [input, valid]);

  return (
    <View style={[styles.container, focused && styles.inputFocused]}>
      <View style={{flexDirection: 'row',}}>
        <View style={{flex: 0.9}}>
          <Text style={styles.label}>{props.label}</Text>
          <TextInput
            style={styles.inputForm}
            placeholder={props.placeHolder}
            value={input}
            blurOnSubmit={false}
            placeholderTextColor={'#c1c0c0'}
            autoCorrect={false}
            secureTextEntry={props.isPassword ? (hidePass ? true : false) : false}
            autoCapitalize="none"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={(e => {
              setInput(e);
              props.onChangeTextCallback!(e);
            })}
          />
        </View>
        {props.isPassword &&
        (hidePass ?
        (<TouchableOpacity onPress={() => {
            setHidePass(!hidePass);
          }}
          style={styles.touchView}>
          <Image style={styles.iconHide}
          source={{uri: 'https://cdn-icons-png.flaticon.com/128/159/159604.png'}}/>
        </TouchableOpacity>) : (
        <TouchableOpacity onPress={() => {
          setHidePass(!hidePass);
          }}
          style={styles.touchView}>
          <Image style={styles.iconHide}
          source={{uri: 'https://cdn-icons-png.flaticon.com/128/709/709612.png'}} />
        </TouchableOpacity>
        ))
        }

      </View>
    </View>
  );
});

export default React.memo(AppTextInput);
