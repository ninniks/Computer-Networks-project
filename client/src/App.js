import './App.css';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'; //to call action creators 
import * as actions from './actions';
import Navbar from './components/Navbar';
import Booking from './components/Booking';
import Home from './components/Home';
import { Layout } from 'antd';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';


class App extends Component {
  async componentDidMount() {
    await this.props.fetchUser();
  }
  
  render(){
    return(<div>
      <BrowserRouter>
        <Layout>
          <Route path = '/' component={Navbar} />
          <Route exact path= '/' component={Home} />
          <PrivateRoute component={Booking} auth={this.props.auth} path='/book'/>
          <Route exact path='/login' component={Login} />
        </Layout>
      </BrowserRouter>
    </div>);
  }
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
