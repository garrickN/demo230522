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
    buttonContainer: {
		marginVertical: 20,
		height: 40,
		marginHorizontal: 10,
		backgroundColor: '#5d57ff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		textTransform: 'uppercase',
		color: '#fff',
		fontSize: 18,
	},
	buttonContainer2: {
		marginVertical: 20,
		height: 40,
		marginHorizontal: 10,
		backgroundColor: '#5d57ff',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	buttonText2: {
		textTransform: 'uppercase',
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	buttonContainer3: {
		marginVertical: 20,
		height: 50,
		marginHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		borderWidth: 4,
		borderColor: '#5d57ff',
	},
	buttonText3: {
		textTransform: 'uppercase',
		color: '#5d57ff',
		fontSize: 16,
	},
	buttonContainer4: {
		marginVertical: 20,
		height: 50,
		marginHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		backgroundColor: '#5d57ff',
	},
	buttonText4: {
		textTransform: 'uppercase',
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	buttonContainer5: {
		marginVertical: 20,
		height: 120,
		width: 120,
		marginHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 60,
		backgroundColor: '#5d57ff',
	},
	buttonText5: {
		textTransform: 'uppercase',
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	cardContainer: {
		height: 100,
		width: '100%',
		flexDirection: 'row',
		padding: 5,
	},
	image: {
		height: '100%',
		flex: 0.35,
	},
	content: {
		flex: 0.65,
		paddingHorizontal: 5,
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 5,
	},
})

export default styles;

