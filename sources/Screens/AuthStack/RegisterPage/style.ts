import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fdfe',
  },

  container1: {
    width: windowWidth,
    height: (windowHeight * 80) / 100,
  },

  container2: {
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7fdfe',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#232322',
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7c7d7d',
    justifyContent: 'center',
    alignItems: 'center',
  },

  view1: {
    marginTop: 5,
    marginHorizontal: 16,
  },

  view2: {
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 150,
    width: (windowWidth * 95) / 100,
    alignItems: 'center',
    borderRadius: 5,
  },

  view3: {
    width: (windowWidth * 80) / 100,
    backgroundColor: '#f7fdfe',
    alignItems: 'center',
  },

  conditionContainer: {
    marginVertical: 20,
    textAlign: 'center',
  },

  conditionText: {
    color: '#f7fdfe',
  },

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
});

export default styles;
