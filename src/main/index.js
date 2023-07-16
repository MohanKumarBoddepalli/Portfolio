import './home.css';
import React from 'react';
import profile from './profile.jpg'

function Portfolio() {
  const technologies = ['React', 'Node.js', 'PostgreSQL', 'Redis'];

  return (
    <div className="aboutContainer">
      <div className="">
        <svg className='welcomeAnimation'>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            welcome
          </text>
        </svg>
      </div>
      <div>
        <p>mohan2</p>
      </div>
      <div>
        <p>mohan3</p>
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