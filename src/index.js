import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './contact';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('header'));
// ReactDOM.render(<Navbar />, document.getElementById('navbar'));

ReactDOM.render(<Contact />, document.getElementById('contact-form'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
