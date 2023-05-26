import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
//const windowHeight = Dimensions.get('window').height;

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
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: 'red',
    },
    viewIcon: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
    },

    viewDetail: {
        marginVertical: 10,
        marginLeft: 16,
        width: windowWidth * 80 / 100,
        paddingBottom: 5,
        borderBottomColor: 'red',
        borderBottomWidth: 0.5,
    },
    row: {
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
