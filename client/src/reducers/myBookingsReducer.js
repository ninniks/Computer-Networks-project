import { MY_BOOKINGS } from '../actions/types';

//reducer to manage state of user bookings
export default function myBookingsReducer(state = null, action){
    switch(action.type){
        case MY_BOOKINGS:
            return action.payload;
        default:
            return state;
    }
}