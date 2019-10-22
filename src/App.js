import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutMe from './components/aboutMe';

function App() {
  return (
    <div className="App">
     
        <Router >
          <div>
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={AboutMe} />
            {/* <Route path="/posts" component={Page2} />
            <Route path="/photos" component={Page2} />
            <Route path="/demos" component={Page3} /> */}
          </div>
        </Router>

    </div>
      );
    }
    
    export default App;
