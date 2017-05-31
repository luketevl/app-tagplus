import React from 'react';

import {
  TabNavigator,
  StackNavigator
 } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ClientsList from '../components/clients/ClientsList';
import ClientsInfo from '../components/clients/ClientsInfo';
import Settings from '../components/Settings';

export const clientStack = StackNavigator({
  Clients:{
    screen: ClientsList,
    navigationOptions: {
      title: 'Clientes'
    }
  },
  ClientsInfo: {
    screen: ClientsInfo,
    navigationOptions: ({navigation}) => ({
        title: navigation.state.params.razao_social
      }),
  }
});

export const Tabs = TabNavigator({
  Clients:{
    screen: clientStack,
    navigationOptions: {
      tabBarLabel: 'Clientes',
      tabBarIcon: ({ tintColor }) => <Icon name="contacts" size={20} color={tintColor} />
    }
  },
})

export const RootNagivation = StackNavigator({
  Tabs:{
    screen: Tabs
  },
  Settings: {
    screen: Settings,
  }
}, {
  mode: 'modal',
  headerMode: 'none',
})
