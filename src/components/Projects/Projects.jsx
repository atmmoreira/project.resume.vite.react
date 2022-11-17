import React from 'react';
import * as Icons from 'phosphor-react';

function Projects({ resume }) {
  return (
    <>
      <section className='courses'>
        <div className='icon'><Icons.Handshake /></div>
        <div>
          <h2>{resume.pt?.projects.title}</h2>
          <div className='description'>
            <ul>
            {resume.pt?.projects.list.map((iten, index) => (
                <li key={index}>
                  <span><a href={iten.url} target="_blank">{iten.title}</a>:</span> {iten.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects;
