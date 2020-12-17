import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Layout, Menu, } from 'antd';

const { Header } = Layout;

class Navbar extends Component {

  renderContent(){
    switch (this.props.auth){
      case null:
        return;
      case false:
        return (
          <h1>asdasf</h1>
        );
      default:
        return (
          <h1>asdfdasdf</h1>
        );
    }
  }
    render(){
      return (
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      );
    }
}


function mapStateToProps({ auth }){
  return { auth };
}



export default connect(mapStateToProps)(Navbar);