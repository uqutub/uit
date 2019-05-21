import React, { Component } from "react";
import { View, Text,TouchableOpacity,Image } from "react-native";
import { Item, Input, Label } from "native-base";
import firebase from "react-native-firebase";
import ImagePicker from 'react-native-image-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      userImage:""
    };
  }
  onSignUpPress = () =>{
      const {email,password,username} = this.state;
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((user)=>{
          firebase.database().ref(`users/${user.user.uid}/`).set({
              email,
              username

          }).then(()=>{
              alert("Success")
          })
      }).catch((err)=>alert(err))
  }
  selectImage = () =>{
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
        //   const source = { uri: response.uri };
      
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      
          this.setState({
            userImage: response.uri,
          });
        }
      });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: "70%", justifyContent: "space-around" }}>
        <TouchableOpacity onPress={this.selectImage} style={{height:50,width:50,borderRadius:25,borderWidth:1,borderColor:"black"}} >
        <Image source={{uri:this.state.userImage}} style={{height:"100%",width:"100%"}} />
        </TouchableOpacity>
        

          <Item fixedLabel style={{width:"100%"}} >
            <Label style={{width:"20%"}} >Username</Label>
            <Input onChangeText={(username)=>this.setState({username})} style={{width:"100%"}} />
          </Item>
          <Item fixedLabel last>
            <Label>Email</Label>
            <Input onChangeText={(email)=>this.setState({email})} />
          </Item>
          <Item fixedLabel>
            <Label>Password</Label>
            <Input secureTextEntry onChangeText={(password)=>this.setState({password})} />
          </Item>
        </View>
        <TouchableOpacity onPress={this.onSignUpPress} style={{width:"70%",height:40,backgroundColor:"blue",justifyContent:"center",alignItems:"center",alignSelf:"center"}} >
        <Text style={{color:"white",fontSize:18 }} >Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
