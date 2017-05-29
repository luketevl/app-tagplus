import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
  Switch
} from 'react-native';

export default class LoginForm extends React.Component{

  constructor(props){
    super(props);
    this.handleRememberMe = this.handleRememberMe.bind(this);

    this.state = {
      rememberMe: true,
      showForm: false
    }
  }

  handleRememberMe(){
    this.setState({
      rememberMe: !this.state.rememberMe
    })
  }

  render(){
    let form= (<View></View>);
    if(this.state.showForm){
      form = (
              <View>
                <TextInput
                  placeholder="Digite o nome do sistema"
                  returnKeyType="next"
                  autoCorrect={false}
                  autoCapitalize="none"
                  maxLength={16}
                  ref={input => this.system = input}
                  onSubmitEditing = {() => this.user.focus()}
                  style={styles.input} />

                <TextInput
                  placeholder="Digite o usuário"
                  returnKeyType="next"
                  autoCorrect={false}
                  autoCapitalize="none"
                  ref={input => this.user = input}
                  onSubmitEditing = {() => this.password.focus()}
                  style={styles.input} />

                <TextInput
                  placeholder="Digite a senha"
                  secureTextEntry
                  returnKeyType="send"
                  autoCorrect={false}
                  autoCapitalize="none"
                  ref={input => this.password = input}
                  style={styles.input} />

                <View style={styles.containerRememberMe}>
                  <Text style={styles.textRememberMe}>Lembrar dados</Text>
                  <Switch
                    onValueChange={this.handleRememberMe}
                    value={this.state.rememberMe}
                    style={styles.switch} />
                </View>
              </View>
      )
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <TouchableOpacity style={[styles.buttonContainer, styles.buttonPrimary]}>
          <Text style={styles.buttonText}>JÁ POSSUO SISTEMA</Text>
        </TouchableOpacity>
        {form}
        <TouchableOpacity style={[styles.buttonContainer, styles.buttonAccent]}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = {
  container: {
    padding: 20
  },
  containerRememberMe:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  textRememberMe:{
    paddingHorizontal: 5,
    marginBottom: 10,
    fontSize: 14
  },
  input:{
    height: 40,
    backgroundColor: '#CECECE',
    marginBottom: 10,
    paddingHorizontal: 10,
    // margin: 10,
  },
  buttonContainer: {
    paddingVertical: 15,
    marginBottom: 15,
  },
  buttonText:{
    textAlign: 'center',
    fontWeight: '700',
    color: '#FFF',
  },
  buttonPrimary:{
    backgroundColor: '#285DAE',
  },
  buttonAccent: {
    backgroundColor: '#569146',
  },
  switch:{
    marginBottom: 10
  }
}
