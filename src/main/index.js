import './home.css';
import React from 'react';
import profile from './profile.jpg'

function Portfolio() {
  const technologies = ['React', 'Node.js', 'PostgreSQL', 'Redis'];

  return (
    <div className="aboutContainer">
      <svg className='welcomeAnimation' style={{ width: 'fit-content' }} >
        <text x="50%" y="50%" dy=".35em" text-anchor="middle" style={{ fontSize: 50, width: 'fit-content' }}>
          welcome
        </text>
      </svg>
      <div className="aboutContentcontainer">
        <div className="side-by-side">
          <text> My name is Mohan Kumar Boddepalli i'm a impassioned and devoted
            software engineer specializing in web development,
            proficient in 
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>PostgreSQL, and Redis</li>
            </ul>
            Beyond my professional pursuits, I ardently explores new technologies during my free time,
            relentlessly expanding my expertise.
            My driving force is the aspiration to create a meaningful and
            positive impact through my work across diverse technological domains.</text>
        </div>
        <div className="side-by-side side-by-right">
          <img className='profileImage' src={profile}></img>
        </div>
      </div>
    </div>
  );
}

const Main = () => {
  return (
    <div>
      <Portfolio />
    </div>


  )
}

export default Main;