import React from 'react';

const About = (props) => (
  <div>
    <div className="ui inverted vertical masthead center aligned segment" id="header">
      <div className="ui container">
        <div className="ui inverted text container">
        <h1 class="ui inverted header">Time to celebrate me!</h1>
        <h2>But be careful about feeding the ego: It bites.</h2>
        </div>
      </div>
    </div>
    <div className="ui vertical stripe container">
      <div className="ui two column stackable grid">
        <div className="column"><div className="ui segment">
          <h3 className="ui header">Graduate of Texas Tech</h3>
          <p>Finished in 2010 with a B.S in Mathematics, but I knew something didn't add up when I didn't get tons of job offers. I also had a very strong minor in Physics.</p>
        </div></div>
        <div className="column"><div className="ui segment">
          <h3 className="ui header">Veteran of the US Navy Reserve</h3>
          <p>Honorable discharge as an Intelligence Specialist 2nd Class</p>
        </div></div>
        <div className="column"><div className="ui segment">
          <h3 className="ui header">High School Math Teacher</h3>
          <p>3 and half years experience teaching children from age 14 to 18 everything they never knew they did not want to know about math. This includes, but is not limited, to: Algebra 1, Geometry, Algebra 2, Math Models, Pre-Calculus, and Personal Finance.</p>
        </div></div>
        <div className="column"><div className="ui segment">
          <h3 className="ui header">UI/UX Developer</h3>
          <p>Training with Ksquare to learn HTML, CSS, and Javascript. Evidence of this learning can be found on my <a href="projects.html">projects</a> page.</p>
        </div></div>
      </div>
    </div>
  </div>
);

export default About;
