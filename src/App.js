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
import Account from '../src/pages/Account.jsx';
import EditAccount from '../src/pages/EditAccount.jsx';
import ForgetPassword from '../src/pages/ForgetPassword.jsx';
import ResetPassword from '../src/pages/ResetPassword.jsx';
import Cart from '../src/pages/Cart.jsx';
import Error from '../src/pages/Error.jsx';
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

          <Route path="/forgetpassword">
            <HeaderNormal/>
            <Slider/>
            <ForgetPassword/>
            <Footer/>
          </Route>

          <Route path="/resetpassword">
            <HeaderNormal/>
            <Slider/>
            <ResetPassword/>
            <Footer/>
          </Route>

          <Route path="/register">
            <HeaderNormal/>
            <Slider/>
            <Register/>
            <Footer/>
          </Route>

          <Route path="/cart">
            <HeaderNormal/>
            <Slider/>
            <Cart/>
            <Footer/>
          </Route>

          <Route path="/error">
            <HeaderNormal/>
            <Slider/>
            <Error/>
            <Footer/>
          </Route>

          <Route path="/account">
            <HeaderNormal/>
            <Slider/>
            <Account/>
            <Footer/>
          </Route>

          <Route path="/editaccountinfo">
            <HeaderNormal/>
            <Slider/>
            <EditAccount/>
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
