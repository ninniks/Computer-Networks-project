import './App.css';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'; //to call action creators 
import * as actions from './actions';
import Navbar from './components/Navbar';
import Booking from './components/Booking';
import { Layout } from 'antd';


const Dashboard = () => <h2>Dashboard</h2>
const Home = () => <h2>Home</h2>


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render(){
    return(<div>
      <BrowserRouter>
        <Layout>
          <Route path= "/" component={Navbar} />
          <Route exact={true} path="/book" component={Booking}/>
          <Route path="/home" component={Home} />
          <Route exact={true} path="/profile" component={Dashboard} />
        </Layout>
      </BrowserRouter>
    </div>);
  }
};

export default connect(null, actions)(App);
