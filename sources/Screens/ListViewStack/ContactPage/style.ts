import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      marginTop: 5,
    },
    title: {
      fontSize: 24,
    },
    content: {
        fontSize: 14,
    },
    nameIcon: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    item: {
        height: windowHeight / 8,
        justifyContent: 'center',
        //alignItems: 'center',
    },
    viewIcon: {
        width: windowHeight / 12,
        height: windowHeight / 12,
        borderRadius: (windowHeight / 12) / 2,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
    },

    viewDetail: {
        marginVertical: 10,
        marginLeft: 16,
        width: windowWidth * 70 / 100,
        paddingBottom: 2.5,
        borderBottomColor: 'red',
        borderBottomWidth: 0.5,
    },
    rowSearch: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 10,
    },
    rowItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
    },

    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        marginRight: 16,
        color: '#9a9b9d',
        borderColor: '#FFFFFF',
        borderRadius: 10,
        backgroundColor: '#eff0ee',
        width: windowWidth * 80 / 100,
    },

    containerBackBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth * 10 / 100,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    tinyLogo: {
        // backgroundColor: "red",
        width: 20,
        height: 20,
    }}
);

export default styles;
