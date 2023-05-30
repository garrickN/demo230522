import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export type IInputValid ={
    value: number
}
export type OInputValid = {
    getValue:  string,
    getValid: boolean,
}

const InputValid = React.forwardRef<OInputValid, IInputValid>((props, ref) => {
    const {value} = props
    const [input, setInput] = React.useState<string>('')
    const [valid, setValid] = React.useState<boolean>(false)

    React.useEffect(()=>{
        if(input.length >= value){
            setValid(true)
        }else setValid(false)
    },[value,input])

    React.useImperativeHandle(ref,() => ({ 
        getValue: input, 
        getValid: valid
    }), [input, valid])

    return (
      <View>
        <Text>inputValid</Text>
        <TextInput style = {{width: 100, height: 50, backgroundColor:'red'}}value={input} onChangeText={(e=> setInput(e))} />
      </View>
    )
})

export default React.memo(InputValid)

const styles = StyleSheet.create({})