import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: "#f6f7f6",
        height: windowHeight,
        width: windowWidth,
    },
    viewItemInformation: {
        height: 120,
        backgroundColor: '#fefffe',
        width: windowWidth,
        alignContent: 'center',
        flexDirection: 'row',
    },
    viewContainerItemsTask: {
        backgroundColor: '#fefffe',
        marginVertical: 2.5,
    },
    viewItemTask: {
        height: 60,
        width: windowWidth,
        alignContent: 'center',
        flexDirection: 'row',
        position: 'relative',
    },
    viewItemNoteTask: {
        width: windowWidth,
        alignContent: 'center',
        marginHorizontal: 16,
    },
    viewItemAvatar: {
        margin: 10,
        marginHorizontal: 20,
        width: 105,
        height: 105,
        position: 'relative',
    },
    viewNameItemTask: {
        width: windowWidth / 2,
        margin: 10,
        marginLeft: 15,
        alignItems: 'center',
        flexDirection: 'row',
    },
    viewIconTask: {
        margin: 10,
        width: windowWidth / 2,
        height: 40,
        right: 0,
        position: 'absolute',
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    avatarIcon: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    boxStatus: {
        width: 90,
        height: 20,
        backgroundColor: "#fde3d1",
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    viewTouch: {
        //backgroundColor: 'gray',
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 90,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    cameraIcon: {
        width: 20,
        height: 20,
    },
    textName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
    },
    textNameTask: {
        fontSize: 16,
        fontWeight: "normal",
        color: 'black',
    },
    textNormalNameTask:{
        fontSize: 16,
        color: '#a0a1a3',
        height: 40,
        paddingTop: 10,
    },
    textNumber: {
        fontSize: 16,
        color: 'black',
    },
    textContent: {
        fontSize: 13,
        color: '#5e6367',
        width: windowWidth - 32,
    },
    textLink: {
        fontSize: 16,
        color: '#3573fb',
        height: 40,
        paddingTop: 10,
        // borderBottomColor: '#3573fb',
        // borderBottomWidth: 0.5
    },
    textStatus: {
        fontSize: 12,
        color: '#d97d62',
        height: 20,
        textAlign: 'center',
    },

    nextPageButton: {
        width: 15,
        height: 15,
        marginHorizontal: 10,
    },
    nextPageButtonBlue: {
        width: 15,
        height: 15,
        marginHorizontal: 10,
        tintColor: '#3573fb',
    }
})

export default styles;