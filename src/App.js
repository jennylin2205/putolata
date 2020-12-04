import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import Slider from '../src/components/Slider.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import HeaderNormal from '../src/components/HeaderNormal.jsx';
import Register from '../src/pages/Register.jsx';
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <HeaderNormal/>
            <Login/>
            <Footer/>
          </Route>

          <Route path="/register">
            <HeaderNormal/>
            <Slider/>
            <Register/>
            <Footer/>
          </Route>

          <Route path="/">
            <Header/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
