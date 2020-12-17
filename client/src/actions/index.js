import axios from 'axios';
import { BOOKED_LIST, FETCH_USER, USER_BOOKING, MY_BOOKINGS } from './types';

export const fetchUser = () => 
    async (dispatch) => {
        const res = await axios.get('/api/current_user');
        
        dispatch({ type: FETCH_USER, payload: res.data });
    }

/* refactory of 
export const fetchUser = () => {
    return function(dispatch){
        axios.get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res}));
    }
};
*/

export const userBooking = (date) =>
    async (dispatch) => {
        const res = await axios.post('/api/book',{date});
        
        dispatch({ type: USER_BOOKING, payload: res.data});
    }

//loads booked dates of all users
export const loadBookedDates = () =>
    async (dispatch) => {
        const res = await axios.get('/api/bookings');
    
        
        dispatch({type: BOOKED_LIST, payload: res.data });
    }

//loads booked dates of the current user
export const loadUserBookedDates = () =>
    async (dispatch) => {
        const res = await axios.get('api/mybookings');

        dispatch({type: MY_BOOKINGS, payload: res.data});
    }
