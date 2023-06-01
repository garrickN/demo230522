import React , 
{
  useRef,
  useState,
  useEffect, 
  useImperativeHandle, 
  forwardRef
} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
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
    color: '#c1c0c0',
    width: '90%',
    marginLeft: 10,
    borderRadius: 5,
    fontSize: 12,
  },

  inputFocused: {
    // Styling khi TextInput được focus
    borderColor: 'blue',
    borderWidth: 2,
  },
});

export type IInputValid ={
  value?: number,
  label?: string,
  placeHolder?: string,
  onChangeTextCallback?: (text: string) => void,
}
export type OInputValid = {
  getValue:  string,
  getValid: boolean,
}

const AppTextInput = forwardRef<OInputValid, IInputValid>((props, ref) => {
  const {value} = props
  const [input, setInput] = useState<string>('')
  const [valid, setValid] = useState<boolean>(false)
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  useEffect(()=>{
    if(input.length >= value! ?? 0)
    {
        setValid(true)
    }
    else setValid(false)
  },[value,input])

  useImperativeHandle(ref,() => ({ 
      getValue: input, 
      getValid: valid
  }), [input, valid])

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        {...props}
        style={[styles.inputForm, focused && styles.inputFocused]}
        placeholder={props.placeHolder}
        value={input}
        blurOnSubmit={false}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={(e => {
          setInput(e)
          props.onChangeTextCallback!(e)
        })}
      />
    </View>
  )
})

export default React.memo(AppTextInput);
