import { Component } from 'react';
import { Row, Col, Layout, Divider, notification, Pagination} from 'antd';
import { connect } from 'react-redux';
import * as actions from '../actions';
import socketIOClient from 'socket.io-client';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import _ from 'lodash';

const { Content } = Layout;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

var socket = socketIOClient('http://localhost:8000', { transport : ['websocket' ] });

//show notification 
const openNotificationWithIcon = type => {
  switch(type){
    case 'success':
    notification[type]({
      message: 'Booking saved',
      description:
        'Your Booking has been saved successfully!',
    });
    break;

    case 'error':
      notification[type]({
        message: 'Booking not saved',
        description: 'Something went wrong.'
      });
    break;

    default:
      break;
  }
};

class Booking extends Component {
  constructor(props){
    super(props);
    this.state = {
      disabledDates: [],
      offset: 0,
      currentPageElements: [],
      elementsPerPage: 10,
      pagesCount: 1,
      allElements: [],
      totalElementsCount: 0
    }
    
    //on Booked event disable booked dates of all connected users
    socket.on('Booked', (date) =>{
      let ISOdate = JSON.parse(date).state;
      this.setState({
        disabledDates: this.state.disabledDates.concat(new Date(ISOdate).getTime())
      })
    });

  }

  async componentDidMount(){
    //async call to loadBookedDates to render calendar UI with Booked data
    await this.props.loadBookedDates();
        _.forEach(this.props.bookedList, (booking) =>{
          this.setState({
            disabledDates: this.state.disabledDates.concat(new Date(booking.date).getTime())
          })
        });

    //async call to loadUserBookedDates to render User list booked data
    await this.props.loadUserBookedDates();
    //setting state for pagination callback to setPaginationStates()
    this.setState({ 
      allElements: this.state.allElements.concat(this.props.myBookings),
      totalElementsCount: this.props.myBookings.length
    
    }, () => this.setPaginationStates());
  }

  setPaginationStates = () => {
    const { totalElementsCount, elementsPerPage } = this.state;
    this.setState({ pagesCount: Math.ceil(totalElementsCount / elementsPerPage)}, 
    () => this.setElementsForCurrentPage())
  }

  setElementsForCurrentPage  = () => {
    const { allElements, offset, elementsPerPage } = this.state;
    const currentPageElements = allElements.slice(offset, offset + elementsPerPage);
    this.setState({ currentPageElements})
  }

  handleScheduled = async (dateTime) => {
    await this.props.userBooking(JSON.stringify(dateTime));
    this.props.booked === true ? openNotificationWithIcon('success') : openNotificationWithIcon('error');

  }

  handlePageClick = (pageNumber) => {
    const { elementsPerPage } = this.state;
    const currentPage = pageNumber - 1;
    const offset = currentPage * elementsPerPage;
    this.setState({
        offset
    }, () => {
        this.setElementsForCurrentPage();
    });
}

  componentDidUpdate(prevProps){
    if(this.props.bookedList !== prevProps.bookedList){
        this.renderBookingList();
    }
  }

  timeSlotValidator = (slotTime) => {
    return !this.state.disabledDates.includes(slotTime.getTime());
  
  }

  renderCalendar(){
    switch(this.props.bookedList){
      case null:
        return (
          <Spin indicator={antIcon} />
        );

      default:
        return(
          <DayTimePicker isDone={false} isLoading={false} timeSlotValidator={this.timeSlotValidator} onConfirm={this.handleScheduled}  timeSlotSizeMinutes={60} />
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
          return this.state.currentPageElements.map((data,i) => {
              return(
              <li key={i}>{new Date(data.date).toLocaleString()}</li>
              );
          })
    }
  }

  render(){
    const {totalElementsCount, pagesCount, elementsPerPage } = this.state;
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
            <p>{pagesCount > 1 && 
            <Pagination defaultCurrent={1}
                        onChange={this.handlePageClick}
                        total={totalElementsCount}
                        showTotal={(total, range) => `${range[0]} - ${range[1]} of ${total} items`}
                        pageSize={elementsPerPage}/>
            }
          </p>
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