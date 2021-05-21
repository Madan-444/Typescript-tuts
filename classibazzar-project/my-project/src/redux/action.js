import { PING, PONG } from "./actiontypes"
import { filter, mapTo,delay } from 'rxjs/operators';


export const ping = ()=> {
    return {
        type: PING
    }
}

export const pong = ()=> {
    return {
        type: PONG
    }
}

export const pingEpic = action$ => action$.pipe(
    filter(action => action.type === 'PING'),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: 'PONG' })
  );