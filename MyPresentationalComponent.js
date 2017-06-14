import React, { Component } from 'react'
import {
   View,
   TouchableOpacity,
   Text,
   StyleSheet
} from 'react-native'

export default MyPresentationalComponent = (props) => {
   return (
      <View>
         <View
            style = {props.myStyle}>
         </View>

         <TouchableOpacity>
            <Text
               style = {styles.button}
               onPress = {props.expandElement}>
               Expand
            </Text>
         </TouchableOpacity>

         <TouchableOpacity>
            <Text
               style = {styles.button}
               onPress = {props.collapseElement}>
               Collapse
            </Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create ({
   button: {
      flex: 1,
      borderWidth: 1,
      borderColor: 'red',
      color: 'red',
      textAlign: 'center',
      marginTop: 50,
      padding: 10
   }
})