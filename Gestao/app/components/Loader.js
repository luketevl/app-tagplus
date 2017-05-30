import React from 'react';

import {
  View,
  Image,
  StyleSheet,
  ActivityIndicator
 } from 'react-native';

export default class Loader extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        <ActivityIndicator animating = {this.props.animating}
           style = {styles.activityIndicator} size = "large"
         />
      </View>
    )
  }
}

const styles= {
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
   },
}
