import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Components/Dashboard';
import OrganzerLogin from './Components/OrganzerLogin';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Route path = '/' exact component = {OrganzerLogin} />
    <Route path = '/dashboard' exact component = {Dashboard} />
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
