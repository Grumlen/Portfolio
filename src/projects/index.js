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
          link="https://grumlen.github.io/Notes-Application/"
          title='Notes Application'
          content='Application allowing the user to create, save, & delete persistent notes on their computer.'
        />
        <ProjectButton
          link="https://grumlen.github.io/Chart-App/"
          title='Charts Application'
          content='Small application allowing the user to modify a persistent table of data and display that data in various formats.'
        />
        <ProjectButton
          link="https://grumlen.github.io/Notes-App-React/"
          title='Notes Application using React'
          content='Updated version of the Notes Application that uses React, Redux, and React-Redux.'
        />
        <ProjectButton
          link="https://github.com/Grumlen/Notes-Server"
          title='Notes Application with Server'
          content='Updated version of the Notes App that uses React in conjunction with a simple server.'
        />
      </div>
    </div>
  </div>
);

export default Projects;
