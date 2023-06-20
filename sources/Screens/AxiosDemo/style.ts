import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    avoidViewContainer: {
        flex: 1,
        top: 0,
        height: (windowHeight * 80) / 100,
        backgroundColor: '#f2f3f3',
    },

    keyboardAvoidView: {
        height: windowHeight,
        width: windowWidth,
        top: 0,
        backgroundColor: '#f2f3f3',
    },

    viewText: {
        width: '100%',
        height: 500,
        backgroundColor: 'red',
    },

    btnStyle: {
        width:100,
        height:50,
        backgroundColor: 'pink',
        marginVertical: 10,
    },
});

export default styles;

