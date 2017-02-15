import React, { Component } from 'react';
import './App.css';
import Footer from './footer';
import Home from './home';
import About from './about';
import Projects from './projects';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div id='App'>
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route><Redirect to='/' /></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
