import React from 'react';
// Icons
import * as Icons from 'phosphor-react';
// Styles
import './Profile.css';

function Profile({ resume }) {
  return (
    <>
      <section className='profile'>
        <div className='icon'>
          <Icons.User />
        </div>
        <div>
          <h2>{resume.pt?.profile.title}</h2>
          <div className='description'>
            {resume.pt?.profile.description.map((iten, index) => (
              <p key={index}>{iten}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Profile;
