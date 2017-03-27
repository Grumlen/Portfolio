import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => (
  <div className="ui inverted vertical masthead center aligned segment" id="header">
    <div className='ui container'>
      <div className="ui inverted secondary pointing large menu">
        <Link to='/Portfolio' className={props.page==='Home' ? "active item" : "item"}>Home</Link>
        <Link to='/about' className={props.page==='About Me' ? "active item" : "item"}>About Me</Link>
        <Link to='/projects' className={props.page==='Projects' ? "active item" : "item"}>Projects</Link>
        <div className="right item">
          <div><a className="ui icon inverted button" href="https://www.linkedin.com/in/nathan-christian-7579654b"><i className="linkedin icon large"></i></a></div>
          <div><a className="ui icon inverted button" href="https://github.com/Grumlen/"><i className="github icon large"></i></a></div>
        </div>
      </div>
    </div>
    <div className="ui container">
      <div className="ui inverted text container">
        <h1 className="ui inverted header">{props.title}</h1>
        <h2 className="sub">{props.content}</h2>
      </div>
    </div>
  </div>

);

export default Header;
