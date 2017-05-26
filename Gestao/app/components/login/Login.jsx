import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default class Login extends React.Component{

  render(){
    return (
      <View style={styles.wrapper}>
        <Text>
          Bem vindo
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: '',
});
