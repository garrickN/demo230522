import * as React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';


export default function CustomButtonPage() {
    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity
                    onPress={() => {
                    console.log('I am tapped');
                    }}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.buttonText}>Custom Button</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        console.log('I am tapped');
                    }}
                    style={styles.buttonContainer2}
                    >
                    <Text style={styles.buttonText2}>Custom Button</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        console.log('I am tapped');
                    }}
                    style={styles.buttonContainer3}
                    >
                    <Text style={styles.buttonText3}>Custom Button</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        console.log('I am tapped');
                    }}
                    style={styles.buttonContainer4}
                    >
                    <Text style={styles.buttonText4}>Custom Button</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        console.log('I am tapped');
                    }}
                    style={styles.buttonContainer5}
                    >
                    <Text style={styles.buttonText5}>Custom</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cardContainer}
                    onPress={() => {
                        console.log('card is tapped');
                    }}
                    >
                    <Image source={require('../../Assets/Images/shoe.jpg')} style={styles.image} />
                    <View style={styles.content}>
                        <Text style={styles.title}>Best Shoes For Excercise.</Text>
                        <Text>
                        Best Shoes For Excercise. Best Shoes For Excercise. Best Shoes For
                        Excercise.
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
