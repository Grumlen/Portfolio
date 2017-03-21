import React from 'react';

const Link = (props) => (
  <a href={props.link}>
    <button className='ui black compact button'>{props.label}</button>
  </a>
);

export default Link;
