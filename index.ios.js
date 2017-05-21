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
  View , ListView , Image,  TouchableHighlight
} from 'react-native';

export default class Locus_ReactNative extends Component {
   constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      projects: ds.cloneWithRows([]),
      notes: ds.cloneWithRows([]),
      studentId: "3",
      showProjects: true,
      loggedin: false,

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
  render() {
     let showProjects = null;
    let showLogin = null;
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
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
          {showProjects}
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Locus_ReactNative', () => Locus_ReactNative);
