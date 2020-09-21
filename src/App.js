import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
function App() {
  return (
   <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/marketing" exact component={Marketing} />
      </Switch>
   </Router>
     
    
  );
}

export default App;
