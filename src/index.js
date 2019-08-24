import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const notes = [
  {
    id: 1,
    title: "My visit to the warehouse"
  },
  {
    id: 2,
    title: "My Discussions with the chapter lead"
  },
  {
    id: 3,
    title: "My first task, I love it"
  }
]
ReactDOM.render(<App notes={notes} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
