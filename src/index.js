import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Counter from './Counter';
import Counter from './CounterAdvanced';
import reportWebVitals from './reportWebVitals';

let number = 1;
const componentInterval = setInterval(() => {
  
  //stop counter once it reaches max number of runs
  if(number === 999999) {
    clearInterval(componentInterval);
    console.log('timer reached max seconds');
  }

  ReactDOM.render(
    <React.StrictMode>
      <Counter seconds={number.toString()} />
    </React.StrictMode>,
    document.getElementById('root')
  );
  number = number +1;
}, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
