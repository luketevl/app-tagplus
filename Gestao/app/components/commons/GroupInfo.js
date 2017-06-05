import React from 'react';

import { 
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import { 
  Grid,
  Col,
  Row,
  Icon
} from 'react-native-elements';

export default class GroupInfo extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }

  render(){
    return (
      <View style={styles.container}>
        <Grid containerStyle={({flex: 1, flexDirection: 'row'})}>
          <Col size={20} containerStyle={styles.action}>
            <Text style={styles.label}>Principal</Text>
            <TouchableOpacity onPress={this.props.iconHandle}>
                <Icon name= {this.props.iconName} color={this.props.iconColor} />
            </TouchableOpacity>
          </Col>
          <Col size={80}>
            {this.props.children}
          </Col>
        </Grid>
        <View>
          <TouchableOpacity onPress={this.props.iconBottomHandle}  style={styles.bottomAction}>
            <Icon name= {this.props.iconBottomName} color={this.props.iconBottomColor}/>
            <Text>
              {this.props.iconBottomLabel}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1 
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label:{
    marginTop: 10,
    color: '#808080'
  },
  bottomAction: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center'
  }

});

