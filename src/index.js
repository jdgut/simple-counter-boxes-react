import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';

let number = 0;
const interval = 1000;
const componentInterval = setInterval(() => {
  
  if(number.toString().length === 6) {
    clearInterval(componentInterval);
  }

  ReactDOM.render(
    <React.StrictMode>
      <Counter seconds={number.toString()} />
    </React.StrictMode>,
    document.getElementById('root')
  );
  number = number +1;
}, interval);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
