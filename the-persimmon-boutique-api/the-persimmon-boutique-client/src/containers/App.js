import React, { Component } from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './App.css';

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <h1> The Persimmon Boutique </h1>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default App
