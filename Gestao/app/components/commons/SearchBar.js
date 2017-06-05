import React from 'react';

import {
  SearchBar
} from 'react-native-elements';

export default class SeacrchBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <SearchBar
        lightTheme
        onChangeText ={this.props.onChangeText}
        placeholder = 'Pesquisar'
      />
    )
  }
}