import React from 'react';

const Header = (props) => (
  <div className='ui container'>
    <div className="ui inverted large menu">
      <a className={props.page==='Home' ? "active item" : "item"} onClick={props.navigateTo}>Home</a>
      <a className={props.page==='About Me' ? "active item" : "item"} onClick={props.navigateTo}>About Me</a>
      <a className={props.page==='Projects' ? "active item" : "item"} onClick={props.navigateTo}>Projects</a>
      <div className="right item">
        <div><a className="ui icon inverted button" href="https://www.linkedin.com/in/nathan-christian-7579654b"><i className="linkedin icon large"></i></a></div>
        <div><a className="ui icon inverted button" href="https://github.com/Grumlen/"><i className="github icon large"></i></a></div>
      </div>
    </div>
  </div>
);

export default Header;
