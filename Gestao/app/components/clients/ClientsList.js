import React from 'react';
import {
  Text,
  ScrollView
} from 'react-native';

import {
  List,
  ListItem,
  Image
} from 'react-native-elements';

import {
  COLORS
} from '../../config/colors';

import SearchBar from '../commons/SearchBar';

import { replace_accents } from '../../js/helpers';

export default class ClientsLists extends React.Component {

  constructor(props){
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    const clients =[{
        id: Math.floor(Math.random() * 10) +1,
        ativo: true,
        "codigo": "WQKOPWQLKDJZNM9",
        "tipo": "J",
        "razao_social": "João da Silva",
        "exterior": false,
        "cpf": "999.999.999",
        sexo: 'F',
        contatos: [
          {
            id: Math.floor(Math.random() * 10) +1,
            descricao: 'luketevl@gmail.com',
            principal: true,
            tipo_contato:{
              id: Math.floor(Math.random() * 10) +1,
              tipo: 'E',
              descricao: 'E-mail'
            }
          },
          {
            id: Math.floor(Math.random() * 10) +1,
            descricao: 'luklhenriqueetevl@gattecnologia.com',
            principal: false,
            tipo_contato:{
              id: Math.floor(Math.random() * 10) +1,
              tipo: 'E',
              descricao: 'E-mail'
            }
          }
        ]
      },
      {
        id: Math.floor(Math.random() * 10) +1,
        ativo: true,
        "codigo": "C3PO",
        "tipo": "F",
        "razao_social": "Lukete",
        "exterior": false,
        "cpf": "119.129.459",
        sexo: 'M',
        contatos: [

          {
            id: Math.floor(Math.random() * 10) +1,
            descricao: 'luklhenriqueetevl@gattecnologia.com',
            principal: true,
            tipo_contato:{
              id: Math.floor(Math.random() * 10) +1,
              tipo: 'E',
              descricao: 'E-mail'
            }
          },

          {
            id: Math.floor(Math.random() * 10) +1,
            descricao: '3232 323202',
            principal: true,
            tipo_contato:{
              id: Math.floor(Math.random() * 10) +1,
              tipo: 'T',
              descricao: 'Celular'
            }
          }
        ],
        enderecos: [
          {
            id: Math.floor(Math.random() * 10) +1,
            principal: true,
            exterior: false,
            cep: '30550-720',
            logradouro: 'Nova Ponte',
            numero: '482c',
            complemento: 'Casa',
            bairro: 'Salgado Filho',
            cidade:{
             id: Math.floor(Math.random() * 10) +1,
             codigo: 4034920,
             nome: 'Belo Horizonte',
             estado: {
              id: Math.floor(Math.random() * 10) +1,
              codigo: 3243242,
              sigla: 'MG',
              nome: 'Minas Gerais'
             } 
            }
          }
        ]
      },
      {
        id: Math.floor(Math.random() * 10) +1,
        ativo: false,
        "codigo": "C3PO",
        "tipo": "J",
        "razao_social": "João da Silva",
        "exterior": true,
        "cpf": "999.999.999",
        contatos: [
          {
            id: Math.floor(Math.random() * 10) +1,
            descricao: 'luketevl2@gmail.com',
            principal: false,
            tipo_contato:{
              id: Math.floor(Math.random() * 10) +1,
              tipo: 'E',
              descricao: 'E-mail'
            }
          },
          {
            id: Math.floor(Math.random() * 10) +1,
            descricao: 'lhenrique@gattecnologia.com',
            principal: true,
            tipo_contato:{
              id: Math.floor(Math.random() * 10) +1,
              tipo: 'E',
              descricao: 'E-mail'
            }
          }
        ]
      }
    ];

    this.state = {
      clients,
      clientsFiltered: clients
    }
  }

  handleFilter(text){
    console.log(replace_accents(text));
    if(text == ''){
      this.setState({clientsFiltered: this.state.clients});
    }
    else{
      this.setState({
        clientsFiltered: this.state.clients.filter(el => replace_accents(el.razao_social).includes(replace_accents(text)))
      })
    }
  }

  clientInfo(client){
    console.log(client);
    this.props.navigation.navigate('ClientsInfo', { ...client});
  }
  render(){
    return (
      <ScrollView>
        <SearchBar 
          onChangeText={this.handleFilter}
        />
        <List>
          {
            this.state.clientsFiltered.map((client, i) => (
              <ListItem
                key={i}
                leftIcon={{name: 'fiber-manual-record', color: client.ativo ? COLORS.positive : ''}}
                title={client.razao_social}
                subtitle={`${client.cpf} | ${client.codigo}`}
                onPress={() => this.clientInfo(client)}
              />
            ))
          }
        </List>
      </ScrollView>
    )
  }
}
