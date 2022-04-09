import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// contoh functional componen
// function HelloComponen () {
//   return <p>Hello Functional Component</p>
// }

//functional komponen diatas bisa dituliskan dengan es6 
//jadi seperti ini atau arrow function, ini statefull Component
const HelloComponen = () => {
  return <p>Hello Functional Component</p>
}

ReactDOM.render(
  <React.StrictMode>
    <HelloComponen />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
