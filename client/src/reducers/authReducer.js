import { FETCH_USER } from '../actions/types';

const INITIAL_STATE ={
    data: null,
    isAuthenticated: false
}

export default function auhtReducer(state = INITIAL_STATE, action){
    console.log(action);
    switch(action.type){
        case FETCH_USER:
            return {data: action.payload || false, isAuthenticated: action.payload ? true : false}
        default:
            return state;
    }
}