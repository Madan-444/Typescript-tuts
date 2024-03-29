import {Action} from '../actions/index'
import {ActionType} from '../action-types/index'
const initialState = 0;


const bankReducer = (state: number = initialState,action: Action)=> {
    switch(action.type) {
        case ActionType.DEPOSIT:
            return state + action.payload
        
        case ActionType.WITHDRAW: 
            return state - action.payload
        case ActionType.BANKRUPT: 
            return state = 0;
        default :
            return state
    }
}

export default bankReducer