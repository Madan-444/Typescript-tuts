import React from 'react';

import {useDispatch,useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';


import './src/css/mainStyling.css'
import { actionCreator } from './state';
import {State} from './state/reducers/index'

function App() {
  const moneyDispatch =  useDispatch();

  const {depositMoney,withDrawMoney,bankrupttMoney} = bindActionCreators(actionCreator,moneyDispatch);
   
  const amount = useSelector((state:State)=> state.bank)

  return (
    <div className="App">
      <div className="App-container">
        <h2 className="App-container__heading">Bank Application</h2>
        <div className="App-container__frame"> {amount}</div>
        <div className="App-container--buttons">
          <p className="App-container--frame__deposit" onClick={()=> depositMoney(1000)} >Deposit</p>
          <p className="App-container--frame__withdraw" onClick={()=> withDrawMoney(500)}>WithDraw</p>
          <p className="App-container--frame__bankrub" onClick= {()=> bankrupttMoney()}>BankRub</p>
        </div>
      </div>
    </div>
  );
}


export default App;
