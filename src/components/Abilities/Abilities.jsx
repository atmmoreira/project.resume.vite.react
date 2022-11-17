import React from 'react';
import * as Icons from 'phosphor-react';

function Abilities({ resume }) {
  return (
    <>
      <section className='abilities'>
        <div className='icon'>
          <Icons.Code />
        </div>
        <div>
          <h2>{resume.pt?.abilities.title}</h2>
          <div className='description'>
            <ul>
              {resume.pt?.abilities.list.map((iten, index) => (
                <li key={index}>
                  <span>{iten.title}:</span> {iten.description}.
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default Abilities;
