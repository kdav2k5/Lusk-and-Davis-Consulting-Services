import React, { Component } from 'react';
import{
    Link
  } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
       <div className="logo">
       <img className ="brand" src={require("./logo.jpg")} alt="home logo" />            
       </div>
       <nav className="container text-center">
        <ul>
            <li>
            <Link to="/">Home</Link>
                </li>
            <li>
                <Link to="/about">About</Link>
                </li>
            <li>
            <Link to="/services">Services</Link>
                </li>
            <li>
            <Link to="/contact">Contact</Link>
                </li>
        </ul>
    </nav>              
</header>
    );
  }
}

export default Header;