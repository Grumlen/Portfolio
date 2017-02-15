import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import Home from './home';
import About from './about';
import Projects from './projects';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.navigateTo = this.navigateTo.bind(this);
  }
  componentWillMount() {
    this.setState({
      page: 'Home',
    });
  }
  navigateTo(e) {
    this.setState({
      page: e.target.textContent,
    })
  }


  render() {
    return (
      <div>
        <Header navigateTo={this.navigateTo} />
        {this.state.page==='Home' ? <Home /> : null}
        {this.state.page==='About Me' ? <About /> : null}
        {this.state.page==='Projects' ? <Projects /> : null}
        <Footer />
      </div>
    );
  }
}

export default App;
