import React, { Component } from 'react';
import {
   Text,
   View,
   TextInput,
   StyleSheet
} from 'react-native';

export default AsyncStorageComponent = (props) => {
   return (
      <View style = {styles.container}>

         <TextInput
            style = {styles.textInput}
            autoCapitalize = 'none'
            onChangeText = {props.setData}
         />

         <Text style = {styles.text}>
            {props.data}
         </Text>

      </View>
   );
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
   },
   text: {
      flex: 1,
      fontWeight: 'bold'
   },
   textInput: {
      margin: 15,
      height: 40,
      borderColor: 'grey',
      borderWidth: 1
   }
});