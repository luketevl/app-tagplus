import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Icon } from 'react-native-elements';

import { 
  COLORS
 } from '../../config/colors';

export default class LabelInput extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.labelContainer}>
        {!this.props.hideLabel && (
          <View style={styles.label}>
            <Text style={styles.text}>{this.props.title}</Text>
          </View>
        )}
          <TextInput {...this.props.inputConfig}
            style={styles.default} />

            {this.props.iconShow && (
              <TouchableOpacity onPress={this.props.iconHandle}>
                <Icon name= {this.props.iconName} />
            </TouchableOpacity>
            )}

        </View>
    )
  }
}

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    marginVertical: 2,
    flex: 1,
  },
  text:{
    color: COLORS.label
  },
  label: {
    marginLeft: 10,
    marginRight: 10,
  },
  default:{
    height: 18,
    flex: 1
  }
});
