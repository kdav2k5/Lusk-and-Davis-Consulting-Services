import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route, 
  Link
} from 'react-router-dom';

//components///

import Header from './Components/Header/header';
import HomePage from './Components/pages/HomePage/homepage';
import About from './Components/pages/About/about';
import Services from './Components/pages/Services/services';
import Contact from './Components/pages/Contact/contact';
import Footer from './Components/footer/footer';
import './Assets/CSS/default.min.css';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header />

        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />



        <Footer />

  
      </div>
      </Router>
    );
  }
}

export default App;
