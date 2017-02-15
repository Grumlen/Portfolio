import React, { Component } from 'react';
import './App.css';
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
      <div id='App'>
        {this.state.page==='Home' ? <Home
                                      navigateTo={this.navigateTo}
                                      page={this.state.page}
                                    /> : null}
        {this.state.page==='About Me' ? <About
                                          navigateTo={this.navigateTo}
                                          page={this.state.page}
                                        /> : null}
        {this.state.page==='Projects' ? <Projects
                                          navigateTo={this.navigateTo}
                                          page={this.state.page}
                                        /> : null}
        <Footer />
      </div>
    );
  }
}

export default App;
