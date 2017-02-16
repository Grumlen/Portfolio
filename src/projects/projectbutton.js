import React from 'react';

const ProjectButton = (props) => (
  <div className="column">
    <a href={props.link}><div className="ui animated fluid fade button" tabIndex="0">
      <div className="visible content"><h2>{props.title}</h2></div>
      <div className="hidden content">{props.content}</div>
    </div></a>
  </div>
);

export default ProjectButton;
