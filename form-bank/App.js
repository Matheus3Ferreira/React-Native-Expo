import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Slider from '@react-native-community/slider';
 
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
 
    };
  };
 
 render(){
 
  return (
    <View style={styles.container}>
 
    <Slider
      minimumValue={0}
      maximumValue={100}
    />
 
    </View>
   );
 }
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 15,
  },
});

