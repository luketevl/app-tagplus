import React from 'react';

import {
  ScrollView,
  View,
  Switch,
  StyleSheet,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Alert
} from 'react-native';

import {
  List,
  ListItem,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Row,


} from 'react-native-elements';

import {
  GENER,
  PERSONS,
  CONTACTS
} from '../../config/constants';


import {
  COLORS
} from '../../config/colors';

import {
  generateEan
} from '../../js/helpers';

import LabelInput from '../commons/LabelInput';
import GroupInfo from '../commons/GroupInfo';
import ListTitle from '../commons/ListTitle';

export default class ClientsInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      ... this.props.navigation.state.params,
      personFisica: this.props.navigation.state.params.tipo == PERSONS.fisica,
      personJuridica: this.props.navigation.state.params.tipo == PERSONS.juridica,
      generMale: this.props.navigation.state.params.sexo == GENER.male,
      generFemale: this.props.navigation.state.params.sexo == GENER.female,
    };

    this.handleAtivo           = this.handleAtivo.bind(this);
    this.handleExterior        = this.handleExterior.bind(this);
    this.handlePersonFisica    = this.handlePersonFisica.bind(this);
    this.handlePersonJuridica  = this.handlePersonJuridica.bind(this);
    this.handleGenerMale       = this.handleGenerMale.bind(this);
    this.handleGenerFemale     = this.handleGenerFemale.bind(this);
    this.handleGenerateBarCode = this.handleGenerateBarCode.bind(this);
  }
  handleAtivo(){
    this.setState({
      ativo: !this.state.ativo,
    })
  }

  _removeAddresses(){
    this.setState({
      enderecos: []
    })
  }
  _removeAddress(address){
    this.setState({
      enderecos: this.state.addresses.filter(el => el != address)
    })
  }
  handleExterior(){
    
    if(this.state.enderecos){
      Alert.alert(
            "Atenção",
            "O endereço será removido, deseja realmente modificar?",
            [
              {text: 'Sim', onPress: () => {
                this._removeAddresses();
                this.setState({exterior: !this.state.exterior})}

              },
              {text: 'Não', style: 'cancel'}
            ]
          )
    }
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

  handleGenerateBarCode(){
    this.setState({
      codigo: generateEan()
    })
  }

  render(){
    let nameRazao;
    let cpfCnpj;
    if(this.state.personFisica){
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
        label: 'Feminino',
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
            switchButton={true}
            onSwitch={this.handleAtivo}
            switched={this.state.ativo}
            hideChevron
          />
          <ListItem
            title="Estrangeiro"
            switchButton={true}
            onSwitch={this.handleExterior}
            switched={this.state.exterior}
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

      <ListTitle title="Dados Principais">
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
                        value: this.state.razao_social,
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
                          value: this.state.cpf,
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
                        value: this.state.codigo,
                      }
                    }
                    iconShow={true}
                    iconName='keyboard'
                    iconHandle={this.handleGenerateBarCode}
                  />
                )}
          hideChevron />

      </ListTitle>

        <ListTitle title="Contatos">
          {this.state.contatos.map((contact, key) => {
            let typeField = 'default';
            let maxLengthField = 255;
            if(contact.tipo_contato.tipo == CONTACTS.email){
              typeField = 'email-address';
            }
            else if(contact.tipo_contato.tipo == CONTACTS.phone){
              typeField = 'phone-pad';
              maxLengthField = 14;
            }
            return (
              <ListItem key={key}
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
        </ListTitle>

      {this.state.enderecos.length >= 1 && (
        <ListTitle title="Endereços">
            {
              this.state.enderecos.map((address, key) => (
                <ListItem key={key}
                  title={(
                    <GroupInfo
                        iconName='remove'
                        iconColor={COLORS.negative}
                        iconHandle={() => this._removeAddress(address)}
                        iconBottomLabel='Adicionar endereço'
                        iconBottomColor={COLORS.positive}
                        iconBottomName='add'
                        iconBottomHandle={() => 9}
                    >
                              <Row>
                                <LabelInput title='Código'
                                  inputConfig = {
                                    {
                                      placeholder: `Digite o CEP`,
                                      returnKeyType: "next",
                                      keyboardType: 'phone-pad',
                                      autoCorrect: false,
                                      maxLength: 14,
                                      ref: input => this.codeInput = input,
                                      onSubmitEditing: text => this.userInput.focus(),
                                      onChangeText: text => this.codigo = text,
                                      value: address.cep,
                                    }
                                  }
                                  hideLabel= {true}
                                  iconShow={true}
                                  iconName='search'
                                  iconHandle={() => 9}
                                />
                                
                              </Row>
                              <Row>
                                <TextInput 
                                  placeholder={ `Informe o Logradouro`}
                                  returnKeyType={ "next"}
                                  autoCorrect={false}
                                  ref={ input => this.systemInput = input}
                                  onSubmitEditing={ text => this.userInput.focus()}
                                  onChangeText={ text => this.system = text}
                                  value={address.logradouro}
                                  style={styles.defaultTextInput}
                                />
                              </Row>
                              <Row>
                                <TextInput 
                                  placeholder={ `Informe o Número`}
                                  returnKeyType={ "next"}
                                  autoCorrect={false}
                                  ref={ input => this.systemInput = input}
                                  onSubmitEditing={ text => this.userInput.focus()}
                                  onChangeText={ text => this.system = text}
                                  value={address.numero}
                                  style={styles.defaultTextInput}
                                />
                                <TextInput 
                                  placeholder={ `Informe o Complemento`}
                                  returnKeyType={ "next"}
                                  autoCorrect={false}
                                  ref={ input => this.systemInput = input}
                                  onSubmitEditing={ text => this.userInput.focus()}
                                  onChangeText={ text => this.system = text}
                                  value={address.complemento}
                                  style={styles.defaultTextInput}
                                />
                              </Row>
                              <Row>
                                <TextInput 
                                  placeholder={ `Informe o Bairro`}
                                  returnKeyType={ "next"}
                                  autoCorrect={false}
                                  ref={ input => this.systemInput = input}
                                  onSubmitEditing={ text => this.userInput.focus()}
                                  onChangeText={ text => this.system = text}
                                  value={address.bairro}
                                  style={styles.defaultTextInput}
                                />
                              </Row>
                              <Row>
                                <TextInput 
                                  placeholder={ `Informe a Cidade`}
                                  returnKeyType={ "next"}
                                  autoCorrect={false}
                                  ref={ input => this.systemInput = input}
                                  onSubmitEditing={ text => this.userInput.focus()}
                                  onChangeText={ text => this.system = text}
                                  value={address.cidade.nome}
                                  style={styles.defaultTextInput}
                                />
                                <TextInput 
                                  placeholder={ `Informe a Estado`}
                                  returnKeyType={ "next"}
                                  autoCorrect={false}
                                  ref={ input => this.systemInput = input}
                                  onSubmitEditing={ text => this.userInput.focus()}
                                  onChangeText={ text => this.system = text}
                                  value={address.cidade.estado.sigla}
                                  style={styles.defaultTextInput}
                                />
                              </Row>
                    </GroupInfo>
                  )}
                  hideChevron
                />
              ))
            }
            </ListTitle>
      )}
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
  },
  defaultTextInput:{
    height: 18,
    flex: 1
  },
  
});
