import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component{

  render(){
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/img/logo.png')} style={styles.logo}/>
        </View>
        <View style={styles.formContainer}>
            <LoginForm />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 100,
    height: 100,

  }
});
