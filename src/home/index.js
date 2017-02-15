import React from 'react';
import Header from '../header';

const Home = (props) => (
  <div className='pageBody'>
    <div className="ui inverted vertical masthead center aligned segment" id="header">
      <Header page='Home' />
      <div className="ui container">
        <div className="ui inverted text container">
          <h1 className="ui inverted header">Welcome to my page</h1>
          <h2 className='sub'>This will be my portfolio once I accomplish anything.</h2>
        </div>
      </div>
    </div>
    <div className="gradientstrip header"></div>
    <div className="ui vertical stripe container">
      <div className="ui segment">
        <h3 className="ui header">Hi, my name is Nathan Christian</h3>
        <p>Contained within this page you will find a record of my skills and accomplishments. I assure you that it is 100% factually accurate, even if some of it is not quite finished yet. For now I am training to be a UI/UX Developer, driven by a burning desire to seek out new puzzles, explore new problems, and boldly go where no developer has gone before!</p>
      </div>
    </div>
  </div>
);

export default Home;
