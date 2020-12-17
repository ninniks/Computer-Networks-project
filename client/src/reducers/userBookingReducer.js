import { USER_BOOKING } from '../actions/types';

//reducer to mange state when a user make a booking
export default function bookedReducer(state = null, action){
    switch(action.type){
        case USER_BOOKING:
            return action.payload;
        default:
            return state;
    }
}