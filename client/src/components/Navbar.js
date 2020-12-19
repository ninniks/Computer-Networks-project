import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Menu, Avatar, Spin, Space } from 'antd';
import { LogoutOutlined, GoogleOutlined, LoadingOutlined, UserOutlined, HomeOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


class Navbar extends Component {

  renderContent(){
    switch (this.props.auth.data){
      case null:
        return( <Spin icon={antIcon} />);
      case false:
        return (
         <Space size={10}>
          <GoogleOutlined />
         <a href='/auth/google'>Login with Google</a>
         </Space>
        );
      default:
        return (
          <div>
          <Space>
          <b>{this.props.auth.data.name}</b>
          <Avatar style={{marginLeft: '15px'}} size="large" src={this.props.auth.data.photo}icon={<UserOutlined />} />
          <a href='/api/logout'><LogoutOutlined style={{marginLeft: '20px'}}/></a>
          </Space>
          </div>
        );
    }
  }

  render(){
      return (
        <div>
        <div className="logo" />
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item style={{paddingLeft: '20px'}} icon={<HomeOutlined />} key="1">Home
          <Link to='/'/>
          </Menu.Item>
          <Menu.Item icon={<UnorderedListOutlined />} key="2">My Bookings
          <Link to='/book' />
          </Menu.Item>
          <div style ={{position:'inline', float: 'right', paddingRight: '40px'}}>
          {this.renderContent()}
          </div>
        </Menu>
        </div>
      );
    }
}


function mapStateToProps({ auth }){
  return { auth };
}



export default connect(mapStateToProps)(Navbar);