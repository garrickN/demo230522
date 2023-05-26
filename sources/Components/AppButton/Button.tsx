import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#87a4ff',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
  },

  text: {
    fontWeight: 'bold',
    color: '#f7fdfe',
  },
});

const AppButton = (props: {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  disabled: boolean | undefined;
  label:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
