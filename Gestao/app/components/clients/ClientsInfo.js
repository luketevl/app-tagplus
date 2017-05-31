import React from 'react';

import {
  ScrollView,
  View,
  Switch,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';

import {
  List,
  ListItem,
  FormLabel,
  FormInput,
  FormValidationMessage

} from 'react-native-elements';

import LabelInput from '../commons/LabelInput';


export default class ClientsInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ativo: this.props.navigation.state.params.ativo
    };

    this.handleAtivo = this.handleAtivo.bind(this);
  }
  handleAtivo(){
    this.setState({
      ativo: !this.state.ativo
    })
  }

  render(){
    const { razao_social, cpf, cnpj, codigo, tipo } = this.props.navigation.state.params;
    let nameRazao;
    let cpfCnpj;
    if(tipo == 'F'){
      nomeRazao = 'Nome';
      cpfCnpj = 'CPF';

    }else{
      nomeRazao = 'Razão Social';
      cpfCnpj = 'CNPJ';
    }
    return (
      <ScrollView>

        <List>
          <ListItem
            title="Ativo"
            rightTitle = {(
                            <Switch
                              value={this.state.ativo}
                              onValueChange={this.handleAtivo}
                            />
                          )}
            hideChevron
          />
      </List>

      <List>
        <ListItem
          title={(
                  <LabelInput title={nomeRazao}
                    inputConfig = {
                      {
                        placeholder: `Digite o ${nameRazao}`,
                        returnKeyType: "next",
                        autoCorrect: false,
                        autoCapitalize: "none",
                        maxLength: 16,
                        minLength: 3,
                        ref: input => this.systemInput = input,
                        onSubmitEditing: text => this.userInput.focus(),
                        onChangeText: text => this.system = text,
                        value: razao_social
                      }
                    }
                  />
                )}
          hideChevron>

        </ListItem>
        <ListItem
          title={(
                  <LabelInput title={cpfCnpj}
                    inputConfig = {
                      {
                        placeholder: `Digite o ${cpfCnpj}`,
                        returnKeyType: "next",
                        autoCorrect: false,
                        autoCapitalize: "none",
                        maxLength: 16,
                        minLength: 3,
                        ref: input => this.systemInput = input,
                        onSubmitEditing: text => this.userInput.focus(),
                        onChangeText: text => this.system = text,
                        value: cpf
                      }
                    }
                  />
                )}
          hideChevron>

        </ListItem>


      </List>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
},
});
