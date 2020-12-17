import { Component } from 'react';
import { Row, Col, Layout, Divider, notification } from 'antd';
import { connect } from 'react-redux';
import { TimePicker } from 'antd';
import MyTimePicker from './MyTimePicker'
import * as actions from '../actions';
import socketIOClient from 'socket.io-client';
import Moment from 'moment';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import _ from 'lodash';

const { Content } = Layout;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

var socket = socketIOClient('http://localhost:8000', { transport : ['websocket' ] });

const openNotificationWithIcon = type => {
  console.log('Type: ', type);
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};


class Booking extends Component {
  constructor(props){
    super(props);
    this.state = {
      disabledDates: []
    }

    socket.on('Booked', (date) =>{
      let ISOdate = JSON.parse(date).state;
      this.setState({
        disabledDates: this.state.disabledDates.concat(new Date(ISOdate).getTime())
      })
    });

  }

  async componentDidMount(){
    await this.props.loadBookedDates();
        _.forEach(this.props.bookedList, (booking) =>{
          this.setState({
            disabledDates: this.state.disabledDates.concat(new Date(booking.date).getTime())
          })
        });
    this.props.loadUserBookedDates();
  }

  handleScheduled = dateTime => {
    this.props.userBooking(JSON.stringify(dateTime));
  }

  componentDidUpdate(prevProps){
    if(this.props.bookedList !== prevProps.bookedList){
        this.renderBookingList();
    }
  }

  timeSlotValidator = (slotTime) => {
    const disabledDates = [new Date(2020, 11, 25, 18, 0, 0).getTime(), new Date(2020, 11, 26, 18, 0, 0).getTime()];
   
    return !this.state.disabledDates.includes(slotTime.getTime());
  
  }

  notifyBooking(){
    switch(this.props.booked){
      case 'ok':
        console.log("Enteeeeered");
        return openNotificationWithIcon('success');
    }
  }

  renderCalendar(){
    switch(this.props.bookedList){
      case null:
        return (
          <Spin indicator={antIcon} />
        );

      default:
        return(
          <DayTimePicker timeSlotValidator={this.timeSlotValidator} onConfirm={this.handleScheduled}  timeSlotSizeMinutes={60} />
        );
    }
  }
  

  renderBookingList(){
    switch(this.props.myBookings){
      case null:
        return(
          <Spin indicator={antIcon} />
        );

      default:
          return this.props.myBookings.map((data,i) => {
              return(
              <li key={i}>{new Date(data.date).toLocaleString()}</li>
              );
          })
          
    }
  }

  render(){
    return(
      <Content>
        
        <Row style={{minHeight: '50px', padding: '20px'}}>
          <Col span={12}>
            <Divider plain><h3><b>Scegli un giorno e un'ora da prenotare</b></h3></Divider>
            {this.renderCalendar()}
          </Col>
          <Col span={12}>
            <Divider plain orientation='left'><h3><b>Le mie prenotazioni</b></h3></Divider>
            <p><ol>{this.renderBookingList()}</ol></p>
            {this.notifyBooking()}
          </Col>
        </Row>
      </Content>
    )
  }
}


function mapStateToProps({ bookedList, myBookings, booked }){
  return { bookedList, myBookings, booked };
}


export default connect(mapStateToProps, actions)(Booking);