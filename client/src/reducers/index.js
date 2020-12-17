import { combineReducers } from 'redux';
import authReducer from './authReducer';
import allBookingsReducer from './allBookingsReducer';
import userBookingReducer from './userBookingReducer';
import myBookingsReducer from './myBookingsReducer';

export default combineReducers({
    auth: authReducer,
    bookedList: allBookingsReducer,
    myBookings: myBookingsReducer,
    booked: userBookingReducer
});