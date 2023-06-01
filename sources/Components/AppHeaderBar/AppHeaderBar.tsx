import React from 'react';

import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions,
    Image,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
      rowHeaderBar: {
          position: 'relative',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 5,
          height: 50,
          //backgroundColor: 'red',
      },
      containerBackBtn: {
        position: 'absolute',
        left: 0,  
        alignItems: 'center',
        margin: 10,
        width: windowWidth * 10 / 100,
      },
      text: {
        margin: 5,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
      },
      tinyLogo: {
          // backgroundColor: "red",
          width: 20,
          height: 20,
      }
})

const AppHeaderBar = (props: any) => {
    return (
        <View style={styles.rowHeaderBar}>
            <View style={styles.containerBackBtn}>
                <TouchableOpacity
                onPress={props.onPress}>
                    <Image
                    style={styles.tinyLogo}
                    source={require('../../Assets/Images/back.png')}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>{props.label}</Text>
        </View>
    );
};

export default AppHeaderBar;
