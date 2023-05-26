import React from 'react';
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
});

const AppTextInput = (props: {
  label:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  placeholder: string | undefined;
  value: string | undefined;
  onChangeText: ((text: string) => void) | undefined;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.inputForm}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default AppTextInput;
