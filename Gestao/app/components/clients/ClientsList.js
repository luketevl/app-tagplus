import React from 'react';
import {
  Text,
  ScrollView
} from 'react-native';

import {
  List,
  ListItem
} from 'react-native-elements';

export default class ClientsLists extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      clients: [{
        id: Math.floor(Math.random() * 10) +1,
        ativo: true,
        "codigo": "C3PO",
        "tipo": "J",
        "razao_social": "João da Silva",
        "exterior": false,
        "cpf": "999.999.999"
      },
      {
        id: Math.floor(Math.random() * 10) +1,
        ativo: true,
        "codigo": "C3PO",
        "tipo": "F",
        "razao_social": "Lukete",
        "exterior": false,
        "cpf": "119.129.459"
      },
      {
        id: Math.floor(Math.random() * 10) +1,
        ativo: true,
        "codigo": "C3PO",
        "tipo": "J",
        "razao_social": "João da Silva",
        "exterior": false,
        "cpf": "999.999.999"
      }
    ]
    }
  }

  clientInfo(client){
    console.log(client);
    this.props.navigation.navigate('ClientsInfo', { ...client});
  }
  render(){
    return (
      <ScrollView>
        <List>
          {
            this.state.clients.map((client, i) => (
              <ListItem
                key={i}
                roundAvatar
                avatar ={{uri: 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwii9ejotJrUAhXECpAKHRyzDP0QjRwIBw&url=http%3A%2F%2Fwww.photoshopphotography.com%2Fcrate-your-cartoon-face-avatar%2F&psig=AFQjCNFB9rh9qzalY1YgKmja9NxQ2Cpr1g&ust=1496329728504830'}}
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