/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View , ListView , Image,  TouchableHighlight, LayoutAnimation
} from 'react-native';
import Login from './components/Login.js';
import MyPresentationalComponent from './MyPresentationalComponent'

export default class Locus_ReactNative extends Component {
   constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      projects: ds.cloneWithRows([]),
      notes: ds.cloneWithRows([]),
      studentId: "3",
      showProjects: false,
      loggedin: false,
      myStyle: {
            height: 20,
            backgroundColor: 'red'
      }
    };
  }
  componentDidMount(){
    console.log("test")
    let url = "https://react-locus.herokuapp.com/view/" + this.state.studentId ;
    fetch(url)
    .then(res => res.json())
    .then(projects => {
      console.log(projects[1]);
      this.setState({
        projects : this.state.projects.cloneWithRows(projects)
      })
    })
  }

  updateEmail = (text) => {
      this.setState({email: text})
   }
   updatePassword = (text) => {
      this.setState({password: text})
   }
   login = () => {
      //alert('email: ' + this.state.email + ' password: ' + this.state.password)
      //this.state.loggedin = true;
      this.setState({
          loggedin : true,
          showProjects : true
      });
}
expandElement = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({
         myStyle: {
            height: 40,
            backgroundColor: 'red'
         }
      })
   }
   collapseElement = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
         myStyle: {
            height: 10,
            backgroundColor: 'red'
         }
      })
}
  render() {
     let showProjects = null;
    let showLogin = null;


     if (!this.state.loggedin) {
      showLogin =  
        <View>
        <Login
               updateEmail = {this.updateEmail}
               updatePassword = {this.updatePassword}
               login = {this.login}
               // getProjects = {this.getProjects}
            />
        </View>
} 
   if (this.state.showProjects){
      showProjects = 

       <ListView
          dataSource={this.state.projects}
          renderRow = {
              (rowData) => (
              <View style={{flex: 1, 
              flexDirection: 'row', 
              paddingTop: 5,
              borderColor: 'black', 
              borderStyle: 'solid',
              borderWidth: 1,
              }}>
                  <Image style={{width: 100, height: 100, justifyContent:'flex-start'}}
                   source={{uri: rowData.image_url}}
                  />
            
         
                  <Text style= {styles.listHeaderItem}> Project: {rowData.name} {"\n"}{"\n"}
                  <Text style = {styles.listItem}> Description: {rowData.tagLine}{"\n"}
                        Announcements: {rowData.current_announcements}{"\n"}
                  </Text>
                  
                  </Text>
                  <Text > {"\n"}{"\n"}</Text>
                  
              
              </View>
             

              )

          }
        //listview
        /> 
    }

    return (
      <View style={styles.container}>
        <View style={{flex: 0.25, flexDirection: 'row'}}>
         <View style={styles.header}> 
           <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
                //borderColor: 'black', 
                //borderStyle: 'solid',
                borderWidth: 1,}}
              source={{uri: 'https://locus-image-store.s3.amazonaws.com/locus.png'}}
            />
          <Text style={styles.h2}> SHARING SCIENCE GLOBALLY</Text>
         </View>
        </View>
          {showLogin}       
          {showProjects}
            <MyPresentationalComponent
               myStyle = {this.state.myStyle}
               expandElement = {this.expandElement}
               collapseElement = {this.collapseElement}
/>
        <View style={{flexDirection: 'row', backgroundColor: '#78bcaf', height: 50, alignItems:'center',}}>
   <Text style={{marginLeft:120}}> constant coders 2017</Text>
   </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginTop:35,
    marginRight:0,
    marginLeft: 0,
    color: '#2c3e50',
  },
  header:{
    //alignSelf: 'strech',
    flexDirection: 'row',
    backgroundColor: '#78bcaf',
    //textAlign: 'center',
    flex:1,
    //justifyContent: 'space-around',
    
    //padding: 10,
  },submit: {
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
   },
  listItem: {
      fontSize: 12,
      fontWeight: 'bold',
      flex: 1,
      flexDirection: "row",
      borderColor: 'black', 
      borderStyle: 'solid',
      borderWidth: 1,
   },
   listHeaderItem: {
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 10,
      //: 'center',

   },
});
AppRegistry.registerComponent('Locus_ReactNative', () => Locus_ReactNative);
