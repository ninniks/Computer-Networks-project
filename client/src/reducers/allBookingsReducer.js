import { BOOKED_LIST } from '../actions/types';

//reducer to manage state of all users bookings
export default function bookedReducer(state = [], action){
    switch(action.type){
        case BOOKED_LIST:
            return action.payload;
        default:
            return state;
    }
}