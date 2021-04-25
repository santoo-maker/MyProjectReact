import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap/dist/react-bootstrap.min.js";
import Dashboard from './Components/Dashboard';
import OrganzerLogin from './Components/OrganzerLogin';
import Home from './Components/Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Route path = '/' exact component = {OrganzerLogin} />
    <Route path = '/dashboard' exact component = {Dashboard} />
    <Route path = '/dashboard/home' exact component = {Home} />
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
