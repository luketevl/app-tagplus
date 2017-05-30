import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
  Switch,
  Alert
} from 'react-native';


export default class LoginForm extends React.Component{

  constructor(props){
    super(props);
    this.handleRememberMe = this.handleRememberMe.bind(this);
    this.handleShowForm   = this.handleShowForm.bind(this);
    this.handleLogin      = this.handleLogin.bind(this);
    this.handleRegister   = this.handleRegister.bind(this);

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

  handleShowForm(){
    this.setState({
      showForm: !this.state.showForm
    });
  }
  handleLogin(){
    this._validateFields();
  }
  handleRegister(){

  }

  _validateFields(){
      if(!this.system || !this.user || !this.password){
        Alert.alert(
          "Atenção",
          "Todos os campos são obrigatórios.",
          [
            {text: 'Fechar', style: 'cancel'}
          ]
        )
      }
  }
  render(){
    let primaryButtonText = 'ACESSAR';
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View>
          <TextInput
            placeholder="Digite o nome do sistema"
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            maxLength={16}
            minLength={3}
            ref={input => this.systemInput = input}
            onSubmitEditing = {text => this.userInput.focus()}
            onChangeText={text => this.system = text}
            style={styles.input} />

          <TextInput
            placeholder="Digite o usuário"
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            ref={input => this.userInput = input}
            onSubmitEditing = {text => this.passwordInput.focus()}
            onChangeText={text => this.user = text}
            style={styles.input} />

          <TextInput
            placeholder="Digite a senha"
            secureTextEntry
            returnKeyType="send"
            autoCorrect={false}
            autoCapitalize="none"
            maxLength={16}
            minLength={6}
            ref={input => this.passwordInput = input}
            onSubmitEditing = {text => this.password = text}
            onChangeText={text => this.password = text}
            style={styles.input} />

          <View style={styles.containerRememberMe}>
            <Switch
              onValueChange={this.handleRememberMe}
              value={this.state.rememberMe}
              style={styles.switch} />
            <Text style={styles.textRememberMe}>Lembrar dados</Text>
          </View>
        </View>

        <TouchableOpacity onPress={this.handleLogin} style={[styles.buttonContainer, styles.buttonPrimary]}>
          <Text style={styles.buttonText}>{primaryButtonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleRegister} style={[styles.buttonContainer, styles.buttonAccent]}>
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
    fontSize: 14,
    backgroundColor: 'transparent',
    color: '#FFF'
  },
  input:{
    height: 40,
    backgroundColor: '#FFF',
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
