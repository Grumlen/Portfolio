import React from 'react';
import Link from './link';

const ProjectButton = (props) => (
  <div className="column">
    <div className="ui animated fluid fade button" tabIndex="0">
      <div className="visible content"><h2>{props.title}</h2></div>
      <div className="hidden content">
        {props.content}
        <div className='linkArea'>
          {props.gitLink ? <Link link={props.gitLink} label='GitHub' /> : null}
          {props.liveLink ? <Link link={props.liveLink} label='Live Version' /> : null}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectButton;
