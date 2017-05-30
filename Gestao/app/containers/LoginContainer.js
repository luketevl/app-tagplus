import React from 'react';
import { connect } from 'react-redux';

import Login from '../components/login/Login';
import {
  userLogin,
  userRegister
 } from '../actions/user'

class LoginContainer extends React.Component{
  render(){
    return (
      <Login />
    )
  }
}

const mapStateToProps    = state => ({user: state.user}) ;
const mapDispatchToProps = dispatch => ({
    login(user){
      dispatch(userLogin(user))
    },
    register(user){
      dispatch(userRegister(user))
    },
});
console.log(mapDispatchToProps);
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
