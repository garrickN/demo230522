import {StyleSheet , Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    backgroundContainer:{
      flex: 1,
    },

    viewContainer:{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    container: {
      backgroundColor: '#eff0ee',
      height: windowHeight * 75 / 100,
      width: windowWidth,
    },

    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#232322',
      marginVertical: 15,
    },

    content: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#7c7d7d',
    },

    viewText: {
      marginTop: 5,
      marginLeft: 10,
    },

    viewTextInput: {
      marginTop: 10,
      marginHorizontal: 10,
      width: windowWidth * 95 / 100,
      alignItems: 'center',
      borderRadius:5,
    },

    viewBottomContainer: {
      backgroundColor: '#eff0ee',
      bottom: 0,
      position: 'absolute',
      width: windowWidth * 95 / 100,
      height: windowHeight * 20 / 100,
    },

    conditionContainer: {
      marginVertical: 20,
      height: 50,
      width: windowWidth * 95 / 100,
      display: 'flex',
      alignItems: 'center',
    },

    conditionText: {
      color: '#f7fdfe',
    },

    registerText: {
        color: '#87a4ff',
        borderBottomColor: '#87a4ff',
        borderBottomWidth: 0.5,
        bottom: -5,
        alignItems: 'center',
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#87a4ff',
        height: 50,
        width: '100%',
        paddingVertical: 15,
        borderRadius: 5,
        marginTop: 10,
    },

    text: {
        fontWeight: 'bold',
        color: '#f7fdfe',
    },

    keyboardAvoidView: {
      height: windowHeight,
      width: windowWidth,
      top: 0,
    },
  });

export default styles;
