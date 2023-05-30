import React , 
  {
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
});

const AppTextInput = forwardRef<OInputValid, IInputValid>((props, ref) => {
    const {value} = props
    const [input, setInput] = React.useState<string>('')
    const [valid, setValid] = React.useState<boolean>(false)

    useEffect(()=>{
        if(input.length >= value! ?? 0){
            setValid(true)
        }else setValid(false)
    },[value,input])

    useImperativeHandle(ref,() => ({ 
        getValue: input, 
        getValid: valid
    }), [input, valid])

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.inputForm}
        placeholder={props.placeHolder}
        value={input}
        onChangeText={(e => {
          setInput(e)
          props.onChangeTextCallback!(e)
        })}
      />
    </View>
  )
})

export default React.memo(AppTextInput);
