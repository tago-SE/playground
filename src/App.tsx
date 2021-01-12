// import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import HomePage from './pages/Home/HomePage';
import CareerPage from './pages/JoinUs';
import RolePage from './pages/RolePage';
import ArticlePage from './pages/Article';
import ArticleListPage from './pages/ArticleList';

import { MockHeader } from './MockHeader';


// Boiler plates
import Home from './boiler-plates/BHome';

function App() {

  return (
    <Router>
      <MockHeader />  
      <Switch>
        <Route 
          path="/boiler/home"
          component={Home} 
        />
        <Route 
          path="/article"
          component={ArticlePage} 
        />
        <Route 
          path="/life-at-if"
          component={ArticleListPage} 
        />
        <Route 
          path="/career/role"  
          component={RolePage} 
        />
        <Route 
          path="/career"
          component={CareerPage} 
        />
        <Route 
          path='/' 
          component={HomePage} 
        />
      </Switch>
  </Router>);
}

export default App;
