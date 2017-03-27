import React from 'react';
import Header from '../header';

const About = (props) => (
  <div className='pageBody'>
    <Header
      page='About Me'
      title='Time to celebrate me!'
      content='But be careful about feeding the ego: It bites.'
    />
    <div className="gradientstrip header"></div>
    <div className="ui vertical stripe container">
      <div className="ui two column stackable grid aboutPage">
        <div className="column"><div className="ui segment">
          <h3 className="ui header">Graduate of Texas Tech</h3>
          <p>Finished in 2010 with a B.S. in Mathematics, but I knew something didn't add up when I didn't get tons of job offers. I also had a very strong minor in Physics.</p>
        </div></div>
        <div className="column"><div className="ui segment">
          <h3 className="ui header">Veteran of the US Navy Reserve</h3>
          <p>Honorable discharge as an Intelligence Specialist 2nd Class. I was responsible for the research, analysis, and dissemination of classified information.</p>
        </div></div>
        <div className="column"><div className="ui segment">
          <h3 className="ui header">High School Math Teacher</h3>
          <p>3 and half years experience teaching high schoolers everything they never knew they did not want to know about math. This includes, but is not limited, to: Algebra 1, Geometry, Algebra 2, Math Models, Pre-Calculus, and Personal Finance.</p>
        </div></div>
        <div className="column"><div className="ui segment">
          <h3 className="ui header">UI/UX Developer</h3>
          <p>Trained at Ksquare to learn HTML, CSS, and Javascript. Evidence of this learning can be found on my projects page. I also learned to user React, Redux, and many various libraries associated with React and Redux.</p>
        </div></div>
      </div>
    </div>
  </div>
);

export default About;
