import React from 'react';
import Header from '../header';

const Home = (props) => (
  <div className='pageBody'>
    <Header
      page='Home'
      title='Welcome to my page'
      content='This will be my portfolio once I accomplish anything.'
    />
    <div className="gradientstrip header"></div>
    <div className="ui vertical stripe container">
      <div className="ui segment">
        <h3 className="ui header">Hi, my name is Nathan Christian</h3>
        <p>Contained within this page you will find a record of my skills and accomplishments. I assure you that it is 100% factually accurate, even if some of it is not quite finished yet. For now I am training to be a UI/UX Developer, driven by a burning desire to seek out new puzzles, explore new problems, and boldly go where no developer has gone before!</p>
        <p>If you would like to know more about me, you can navigate using the menu bar at the top of the page or check out my <a href='https://drive.google.com/open?id=0B-Zg7NrREhR-Nm9XeGp1Ry10Xzg'>resume</a></p>
      </div>
    </div>
  </div>
);

export default Home;
