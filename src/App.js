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
import Checkout from '../src/pages/Checkout.jsx';
import Sales from '../src/pages/Sales.jsx';
import ProductDetails from '../src/pages/ProductDetails.jsx';
import ProductAll from '../src/pages/ProductAll.jsx';
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Header/>
            <Login/>
            <Footer/>
          </Route>

          <Route path="/forgetpassword">
            <Header/>
            <Slider/>
            <ForgetPassword/>
            <Footer/>
          </Route>

          <Route path="/resetpassword">
            <Header/>
            <Slider/>
            <ResetPassword/>
            <Footer/>
          </Route>

          <Route path="/register">
            <Header/>
            <Slider/>
            <Register/>
            <Footer/>
          </Route>

          <Route path="/cart">
            <Header/>
            <Slider/>
            <Cart/>
            <Footer/>
          </Route>

          <Route path="/error">
            <Header/>
            <Slider/>
            <Error/>
            <Footer/>
          </Route>

          <Route path="/productdetails">
            <Header/>
            <Slider/>
            <ProductDetails/>
            <Footer/>
          </Route>

          <Route path="/checkout">
            <Header/>
            <Slider/>
            <Checkout/>
            <Footer/>
          </Route>

          <Route path="/sales">
            <Header/>
            <Slider/>
            <Sales/>
            <Footer/>
          </Route>

          <Route path="/product">
            <Header/>
            <Slider/>
            <ProductAll/>
            <Footer/>
          </Route>

          <Route path="/account">
            <Header/>
            <Slider/>
            <Account/>
            <Footer/>
          </Route>

          <Route path="/editaccountinfo">
            <Header/>
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
