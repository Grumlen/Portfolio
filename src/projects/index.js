import React from 'react';
import Header from '../header';
import ProjectButton from './projectbutton';

const Projects = (props) => (
  <div className='pageBody'>
    <Header
      page='Projects'
      title='Here are some of my nifty projects!'
      content='There are many like them, but these ones are mine.'
    />
    <div className="gradientstrip header"></div>
    <div className="ui vertical stripe container">
      <div className="ui two column stackable doubling grid">
        <ProjectButton
          gitLink="https://github.com/Grumlen/Notes-Application"
          liveLink="https://grumlen.github.io/Notes-Application/"
          title='Notes Application'
          content='App allowing the user to modify persistent notes on their computer.'
        />
        <ProjectButton
          gitLink="https://github.com/Grumlen/Chart-App"
          liveLink="https://grumlen.github.io/Chart-App/"
          title='Charts Application'
          content='App built using chart.js and require.js that allows the user to modify a table of data and render it in various charts.'
        />
        <ProjectButton
          gitLink="https://github.com/Grumlen/Notes-App-React"
          liveLink="https://grumlen.github.io/Notes-App-React/"
          title='Notes-React Application'
          content='Updated version of the Notes Application that uses React, Redux, and React-Redux.'
        />
        <ProjectButton
          gitLink="https://github.com/Grumlen/Notes-Server"
          title='Notes-React App with Server'
          content='Updated version of Notes-React that uses React in alongside a server built with MongoDB and Mongoose.'
        />
      </div>
    </div>
  </div>
);

export default Projects;
