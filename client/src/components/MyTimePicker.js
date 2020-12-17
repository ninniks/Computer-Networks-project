import { Component } from 'react';
import { TimePicker, Spin } from 'antd';
import { connect } from 'react-redux';
import Moment from 'moment';
import * as actions from '../actions';
import { LoadingOutlined } from '@ant-design/icons';
import _ from 'lodash';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';

const { RangePicker } = TimePicker;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const theme = {
    primary: '#FF0000',
    secondary: '#C0C0C0',
    background: '##FFFFFF', // This should match the container background
    buttons: {
      disabled: {
        color: '#333',
        background: '#f0f0f0'
      },
      confirm: {
        color: '#fff',
        background: 'slategrey',
        hover: {
          color: '',
          background: 'lightslategrey'
        }
      }
    },
    feedback: {
      success: {
        color: '#29aba4'
      },
      failed: {
        color: '#eb7260'
      }
    }
  };

class MyTimePicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            disabledHours: []
        }
       
    }
    
    componentDidMount(){
        this.props.fetchTimePickerState(this.props.selectedDay);
    }

    componentDidUpdate(prevProps){
        if(this.props.selectedDay !== prevProps.selectedDay){
            this.props.fetchTimePickerState(this.props.selectedDay);
        }
    }

    demo(){
        let merged;
        let disabledHours = _.map(this.props.timePickerState.data, (hour)=> {
            return _.range(hour.start, parseInt(hour.end)+1)
        })

        merged = [].concat.apply([],disabledHours);
        return merged;
        
    }

   renderContent(){
       switch(this.props.timePickerState){
           case null:
               return (<Spin indicator={antIcon} />);
            default:
                return(
                    <div><RangePicker defaultValue={[Moment().add(1, 'hours'), Moment().add(2, 'hours')]} 
                           onChange={(startTime, stringTime) => this.props.changeTime(stringTime[0], stringTime[1])} showNow={true} format="HH" 
                           disabledHours={() => this.demo()} /></div>
                );
       }
   }
    
    render(){
        const handleScheduled = dateTime => {
            console.log('scheduled: ', dateTime);
        };

        return(
            <div><DayTimePicker theme={theme} onConfirm={handleScheduled} timeSlotSizeMinutes={60} /></div>
        );
    }
}

function mapStateToProps({ timePickerState }){
    return { timePickerState };
}

export default connect(mapStateToProps, actions)(MyTimePicker);