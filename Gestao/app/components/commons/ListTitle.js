import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  List
} from 'react-native-elements';

import { 
  COLORS
 } from '../../config/colors';

export default class ListTitle extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
          <Text style={styles.labelList}>{this.props.title.toUpperCase()}</Text>
          <List containerStyle={styles.textList}>
            {this.props.children}
          </List>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
  },
  textList:{
      marginTop: 5
    },
    labelList: {
      marginTop: 20,
      paddingHorizontal: 15,
      fontSize: 10,
      color: COLORS.label
    }  
}