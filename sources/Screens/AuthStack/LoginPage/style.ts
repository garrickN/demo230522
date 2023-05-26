import {StyleSheet , Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    backgroundContainer: {
      height: windowHeight,
    },

    avoidViewContainer:{
      flex: 1,
      top: 0,
      height: windowHeight * 70 / 100,
      backgroundColor: 'red',
    },

    container: {
      flex: 1,
      backgroundColor: "#eff0ee", 
    },

    container1: {
      width: windowWidth,
    },

    container2: {
      backgroundColor: "#eff0ee",
      position: "absolute",
      bottom: 0,
      height: windowHeight * 30 / 100,
      width: windowWidth,
      alignItems: "center",
      justifyContent: "center",
    },

    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: '#232322',
      marginVertical: 15,
    },

    content: {
      fontSize: 16,
      fontWeight: "bold",
      color: '#7c7d7d',
    },

    view1: {
      marginTop: 5,
      marginLeft: 10,
    },

    view2: {
      marginTop: 10,
      marginHorizontal: 10,
      width: windowWidth * 95 / 100,
      alignItems: "center",
      borderRadius:5,
    },

    view3: {
      position: "absolute",
      bottom: 0,
    },
    
    conditionContainer: {
      marginVertical: 30,
      alignItems: "center",
      width: windowWidth * 95 / 100,
    },

    conditionText: {
      color: '#f7fdfe',
    },

    registerText: {
        marginLeft: 10,
        color: '#87a4ff',
        borderBottomColor: "#87a4ff",
        borderBottomWidth: 0.5,
        bottom: -5,
        textAlign: "center",
    },

    button: {
        alignItems: "center",
        backgroundColor: "#87a4ff",
        width: '100%',
        paddingVertical: 15,
        borderRadius: 5,
        
    },

    text: {
        fontWeight: 'bold',
        color: "#f7fdfe",
    },

    scrollView: {
      backgroundColor: 'red',
    },

    keyboardAvoidView: {
      height: windowHeight,
      width: windowWidth,
      top: 0,
      backgroundColor: 'red',
    },
  });

export default styles;
