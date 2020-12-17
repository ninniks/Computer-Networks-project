import { MY_BOOKINGS } from '../actions/types';

//reducer to manage state of user bookings
export default function auhtReducer(state = null, action){
    console.log(action);
    switch(action.type){
        case MY_BOOKINGS:
            return action.payload;
        default:
            return state;
    }
}