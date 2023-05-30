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
})

export default styles;

