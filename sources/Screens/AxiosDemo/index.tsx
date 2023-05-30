import axios from 'axios';
import React from 'react';
import { Alert, Button, Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './style';
const baseURL = 'https://jsonplaceholder.typicode.com/posts';

export default function MyApp() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  // React.useEffect(() => {
  //   console.log("test");
    
  //   axios.get(`${baseURL}/1`).then((response) => {
  //     setPost(response.data);
  //     console.log("res", response);
  //   });
  // }, []);
  // Example useCallback
  // const sun = React.useCallback(() =>error ? 1+2 : 1+1,[error])
  React.useEffect(() => {
    async function getPost(){
        // invalid url will trigger an 404 error
    axios.get(`${baseURL}/1`).then((response) => {
        setPost(response.data);
      }).catch(e => {
        setError(e);
      });
    }

    getPost();
  }, []);

  async function createPost() {
    console.log(" onpress =>>>>>>>");
    
    axios
      .post(baseURL, {
        userId: "2",
        id: "2",
        title: 'Hello World!',
        body: 'This is a new post.',
      })
      .then((response) => {
        console.log("response=>>>>>", response);
        
        setPost(response.data);
      });
  }

  async function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: 'Hello World!',
        body: 'This is an updated post.',
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  async function deletePost() {
    axios
      .delete(`${baseURL}/1`)
      .then(() => {
        console.log('Post deleted!');
      Alert.alert('Delete Notify', 'You are deleted successfully', [
      {
        text: 'OK', 
        onPress: () => console.log('OK Pressed'),
      },
      ]);
      setPost(null);
      });
  }

//   if (!post) {return 'No post!';}
//   if (error) {return `Error: ${error.message}`;}

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidView}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <View style = {{width: "100%", height: 500, backgroundColor: "red"}}>
                  <Text>{post?.title}</Text>
                  <Text>{post?.body}</Text>
                  <TouchableOpacity
                  style={{width:100, height:50, backgroundColor: "pink", marginVertical: 10,}}
                    onPress={() => createPost()}/>
                  <TouchableOpacity 
                  style={{width:100, height:50, backgroundColor: "pink", marginVertical: 10,}}
                    onPress={() => updatePost()}/>
                  <TouchableOpacity 
                  style={{width:100, height:50, backgroundColor: "pink", marginVertical: 10,}}
                    onPress={() => deletePost()}/>
              </View>  
          </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    </SafeAreaView>

  );
}
