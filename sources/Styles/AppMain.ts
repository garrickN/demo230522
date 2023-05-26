import { StyleSheet } from "react-native";

const stylesAppMain = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
      backgroundColor: '#f2f3f3',
    },

    title: {
      textAlign: 'center',
      marginVertical: 8,
      width: '90%',
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

  export default stylesAppMain;
  