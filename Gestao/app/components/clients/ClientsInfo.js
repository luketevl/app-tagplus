import React from 'react';

import {
  ScrollView,
  View,
  Switch,
  StyleSheet,
  TextInput,
  Text,
  KeyboardAvoidingView
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
      ativo: this.props.navigation.state.params.ativo,
      exterior: this.props.navigation.state.params.exterior,
      personFisica: this.props.navigation.state.params.tipo == 'F',
      personJuridica: this.props.navigation.state.params.tipo == 'J',
      generMale: this.props.navigation.state.params.sexo == 'M',
      generFemale: this.props.navigation.state.params.sexo == 'F',
    };

    this.handleAtivo          = this.handleAtivo.bind(this);
    this.handleExterior       = this.handleExterior.bind(this);
    this.handlePersonFisica   = this.handlePersonFisica.bind(this);
    this.handlePersonJuridica = this.handlePersonJuridica.bind(this);
    this.handleGenerMale      = this.handleGenerMale.bind(this);
    this.handleGenerFemale    = this.handleGenerFemale.bind(this);
  }
  handleAtivo(){
    this.setState({
      ativo: !this.state.ativo,
    })
  }

  handleExterior(){
    this.setState({
      exterior: !this.state.exterior
    })
  }

  handlePersonFisica(){
    this.setState({
      personFisica: !this.state.personFisica,
      personJuridica: this.state.personFisica
    })
  }

  handlePersonJuridica(){
    this.setState({
      personJuridica: !this.state.personJuridica,
      personFisica: this.state.personJuridica
    })
  }

  handleGenerFemale(){
    this.setState({
      generFemale: !this.state.generFemale,
      generMale: this.state.generFemale
    })
  }

  handleGenerMale(){
    this.setState({
      generMale: !this.state.generMale,
      generFemale: this.state.generMale
    })
  }
  render(){
    const { razao_social, cpf, cnpj, codigo, tipo, contatos, exterior } = this.props.navigation.state.params;
    let nameRazao;
    let cpfCnpj;
    if(tipo == 'F'){
      nomeRazao = 'Nome';
      cpfCnpj = 'CPF';

    }else{
      nomeRazao = 'Razão Social';
      cpfCnpj = 'CNPJ';
    }

    const typePersons = [
        {
          label: 'Pessoa Física',
          value: this.state.personFisica,
          event: this.handlePersonFisica,
        },
        {
          label: 'Pessoa Juridica',
          value: this.state.personJuridica,
          event: this.handlePersonJuridica,
        },
    ];

    const geners = [
      {
        label: 'Masculino',
        value: this.state.generMale,
        event: this.handleGenerMale
      },
      {
        label: 'Feminio',
        value: this.state.generFemale,
        event: this.handleGenerFemale
      }
    ];
    return (
      <KeyboardAvoidingView behavior="position" style={styles.container}>
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
          <ListItem
            title="Estrangeiro"
            rightTitle = {(
                            <Switch
                              value={this.state.exterior}
                              onValueChange={this.handleExterior}
                            />
                          )}
            hideChevron
          />
          <ListItem title={(
            <View style={styles.containerTypePerson}>
              {typePersons.map((person, key) => {
                return (
                            <Text key={key}>
                              <Text style={styles.textPerson}>{person.label}</Text>
                              <Switch
                                value={person.value}
                                onValueChange={person.event}
                                style={styles.switchPerson}
                              />
                            </Text>
              )})}

            </View>
            )}
            hideChevron
          />
        {this.state.personFisica && (
          <ListItem title={(
            <View style={styles.containerTypePerson}>
              {geners.map((gener, key) => {
                return (
                            <Text key={key}>
                              <Text style={styles.textPerson}>{gener.label}</Text>
                              <Switch
                                value={gener.value}
                                onValueChange={gener.event}
                                style={styles.switchPerson}
                              />
                            </Text>
              )})}

            </View>
            )}
            hideChevron
          />
        )}
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
                        minLength: 1,
                        ref: input => this.systemInput = input,
                        onSubmitEditing: text => this.userInput.focus(),
                        onChangeText: text => this.system = text,
                        value: razao_social,
                      }
                    }
                  />
                )}
          hideChevron />

        {!this.state.exterior && (
          <ListItem
            title={(
                    <LabelInput title={cpfCnpj}
                      inputConfig = {
                        {
                          placeholder: `Digite o ${cpfCnpj}`,
                          returnKeyType: "next",
                          autoCorrect: false,
                          maxLength: 16,
                          minLength: 3,
                          ref: input => this.systemInput = input,
                          onSubmitEditing: text => this.userInput.focus(),
                          onChangeText: text => this.system = text,
                          value: cpf,
                        }
                      }
                    />
                  )}
            hideChevron />
      )}

        <ListItem
          title={(
                  <LabelInput title='Código'
                    inputConfig = {
                      {
                        placeholder: `Digite o código`,
                        returnKeyType: "next",
                        autoCorrect: false,
                        maxLength: 14,
                        ref: input => this.codeInput = input,
                        onSubmitEditing: text => this.userInput.focus(),
                        onChangeText: text => this.codigo = text,
                        value: codigo,
                      }
                    }
                    iconShow={true}
                    iconName='keyboard'
                    iconHandle={() => 9}
                  />
                )}
          hideChevron />

      </List>

      <List>
        {contatos.map(contact => {
          let typeField = 'default';
          let maxLengthField = 255;
          if(contact.tipo_contato.tipo == 'E'){
            typeField = 'email-address';
          }
          else if(contact.tipo_contato.tipo == 'T'){
            typeField = 'phone-pad';
            maxLengthField = 14;
          }
          return (
            <ListItem
              title={(
                      <LabelInput title={contact.tipo_contato.descricao}
                        inputConfig = {
                          {
                            placeholder: `Digite o ${contact.tipo_contato.descricao}`,
                            returnKeyType: "next",
                            keyboardType: typeField,
                            autoCorrect: false,
                            maxLength: maxLengthField,
                            ref: input => this.systemInput = input,
                            onSubmitEditing: text => this.userInput.focus(),
                            onChangeText: text => this.system = text,
                            value: contact.descricao,

                          }
                        }
                        key={contact.id}
                        iconShow={!contact.principal}
                        iconName='clear'
                        iconHandle={() => 9}
                      />
                    )}
              hideChevron />
          )
        })}

      </List>
      </ScrollView>
    </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTypePerson:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  switchPerson:{
      paddingHorizontal: 5,
  },
  textPerson: {
    marginBottom: 10,
    paddingVertical: 19
  }
});
