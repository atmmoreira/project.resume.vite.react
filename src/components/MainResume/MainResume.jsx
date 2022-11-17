import React from 'react';
import Abilities from '../Abilities/Abilities';
import Courses from '../Courses/Courses';
import Domains from '../Domains/Domains';
import Experiences from '../Experiences/Experiences';
import Profile from '../Profile/Profile';
import './MainResume.css';

function MainResume({ resume }) {
  return (
    <div className='main col-md-9 col-sm-12 p-4'>
      <Profile resume={resume} />
      <Experiences resume={resume} />
      <Abilities resume={resume} />
      <Courses resume={resume} />
      <Domains resume={resume} />
    </div>
  );
}
export default MainResume;
