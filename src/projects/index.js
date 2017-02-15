import React from 'react';

const Projects = (props) => (
  <div>
    <div className="ui inverted vertical masthead center aligned segment" id="header">
      <div className="ui container">
        <div className="ui inverted text container">
        <h1 className="ui inverted header">Here are some of my nifty projects!</h1>
        <h2 className="sub">There are many like them, but these ones are mine.</h2>
        </div>
      </div>
    </div>
    <div className="ui vertical stripe container">
      <div className="ui four column stackable doubling grid">
        <div className="column">
          <a href="https://github.com/Grumlen/Notes-Application"><div className="ui animated fade button" tabindex="0">
            <div className="visible content"><h2>Notes Application</h2></div>
            <div className="hidden content">Small application allowing the user to create, save, and delete notes that are persistent on their computer.</div>
          </div></a>
        </div>
        <div className="column">
          <a href="https://github.com/Grumlen/Chart-App"><div className="ui animated fade button" tabindex="0">
            <div className="visible content"><h2>Charts Application</h2></div>
            <div className="hidden content">Small application allowing the user to create, save, and delete a table of data and display that data in various forms.</div>
          </div></a>
        </div>
        <div className="column">
          <a href="https://grumlen.github.io/Notes-App-React/"><div className="ui animated fade button" tabindex="0">
            <div className="visible content"><h2>Notes Application using React</h2></div>
            <div className="hidden content">Updated version of the Notes Application that uses React, Redux, and React-Redux.</div>
          </div></a>
        </div>
        <div className="column">
          <a href="https://github.com/Grumlen/Notes-Server"><div className="ui animated fade button" tabindex="0">
            <div className="visible content"><h2>Notes Application with Server</h2></div>
            <div className="hidden content">Updated version of the Notes App that uses React in conjunction with a simple server.</div>
          </div></a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
