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
import AddEvents from './Components/AddEvents';
import AddMenSinglesForm from './Components/AddMenSinglesForm';
import MenSinglesTieSheet from './Components/MenSinglesTieSheet';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Route path = '/' exact component = {OrganzerLogin} />
    <Route path = '/dashboard' exact component = {Dashboard} />
    <Route path = '/dashboard/home' exact component = {Home} />
    <Route path = '/dashboard/addEvents' exact component = {AddEvents} />
    <Route path = '/dashboard/players_entry/menssingles' exact component = {AddMenSinglesForm} />
    <Route path = '/dashboard/players_entry/menssingles/tie-sheet' exact component = {MenSinglesTieSheet} />
    
    
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
