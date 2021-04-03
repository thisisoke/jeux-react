import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Login } from './screen/Login.jsx';


export function App() {
  return (
    //Router navigates the "page" in the broswer search bar to the correct screen component as listed below

   //Switch ensures that each page component is displayed on its own. And the URL has to be an 'exact match'
   <Router>
     
     <Switch>
       <Route path="/" exact component={Login}/>
      
     </Switch>

   </Router>

 );
}

