import React from 'react';
import * as Icons from 'phosphor-react';

function Courses({ resume }) {
  return (
    <>
      <section className='courses'>
        <div className='icon'><Icons.Monitor /></div>
        <div>
          <h2>{resume.pt?.courses.title}</h2>
          <div className='description'>
            <ul>
            {resume.pt?.courses.list.map((iten, index) => (
                <li key={index}>
                  <span>{iten.title}</span> {iten.description} <a href={iten.url} target="_blank"><Icons.Link /></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default Courses;
