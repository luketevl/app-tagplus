import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

export default class LabelInput extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.labelContainer}>
          <View style={styles.label}>
            <Text>{this.props.title}</Text>
          </View>
          <TextInput {...this.props.inputConfig}
              style={styles.default} />
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
  label: {
    marginLeft: 10,
    marginRight: 10,
  },
  default:{
    height: 18,
    flex: 1
  }
});
