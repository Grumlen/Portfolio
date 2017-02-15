import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => (
  <div className='ui container'>
    <div className="ui inverted secondary pointing large menu">
      <Link to='/home' className={props.page==='Home' ? "active item" : "item"}>Home</Link>
      <Link to='/about' className={props.page==='About Me' ? "active item" : "item"}>About Me</Link>
      <Link to='/projects' className={props.page==='Projects' ? "active item" : "item"}>Projects</Link>
      <div className="right item">
        <div><a className="ui icon inverted button" href="https://www.linkedin.com/in/nathan-christian-7579654b"><i className="linkedin icon large"></i></a></div>
        <div><a className="ui icon inverted button" href="https://github.com/Grumlen/"><i className="github icon large"></i></a></div>
      </div>
    </div>
  </div>
);

export default Header;
