import { PING, PONG } from "./actiontypes"

const initialState = {
    isPinging: false,
}

const myReducer = (state = initialState,action)=> {
    if(action.type === PING) {
        console.log("The ping action is jsut happened")
        return {
            ...state,
            isPinging: true
        }
    }
    if(action.type === PONG) {
        console.log("The pong action just happened")
        return {
            ...state,
            isPinging: false,
        }
    }
    return state;
}

export default myReducer

