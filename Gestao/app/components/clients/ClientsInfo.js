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
                  <LabelInput title={tipo == 'F' ? 'CPF' : 'CNPJ'}
                    inputConfig = {
                      {
                        placeholder: "Digite o nome do sistema",
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
