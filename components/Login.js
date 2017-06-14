import React, { Component } from 'react'

import {
   View,
   Text,
   TouchableHighlight,
   TextInput,
   StyleSheet
} from 'react-native'

export default Login = (props) => {
   return (
    
      <View style = {styles.container}>
          <Text style = {styles.title}> Student Login </Text>
         <Text style = {styles.text}>Please enter you email:</Text>
         <TextInput
            style = {styles.input}
            placeholder = 'Email'  
            value  = 'juliah@google.com' 
            autoCapitalize = 'none'
            onChangeText = {props.updateEmail}
         />
         <Text style = {styles.text}>Please enter you password:</Text>
         <TextInput
            style = {styles.input}
            secureTextEntry={true}
            value  = 'guest@locus.com' 
            placeholder = 'Password'
            autoCapitalize = 'none'
            onChangeText = {props.updatePassword}
         />
         <TouchableHighlight
            style = {styles.submit}
            onPress = { () => props.login(props.email, props.password)}>
            <Text style={{marginLeft:40}}>
               Submit
            </Text>
         </TouchableHighlight>
      </View>
   )
}


var styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 50, 
  },
  title: {
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 30
  },
   input: {
      marginTop: 5,
      marginBottom: 30,
      height: 40,
      width : 200,
      borderColor: 'grey',
      borderWidth: 1
   },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#78bcaf',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
   submit: {
      justifyContent: 'center',
      width : 150,
      padding: 10,
      marginLeft: 20,
      backgroundColor: '#78bcaf',
      marginBottom:10,
      borderWidth: 1,
      borderColor: 'darkblue',
      borderStyle: 'solid',
      borderTopLeftRadius: 10,
      borderTopRightRadius : 10 ,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius : 10 
   }
});