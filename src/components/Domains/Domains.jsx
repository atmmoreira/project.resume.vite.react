import React from 'react';
import * as Icons from 'phosphor-react';

function Domains({ resume }) {
  return (
    <>
      <section className='compentences'>
        <div className='icon'><Icons.Rocket /> </div>
        <div>
          <h2>{resume.pt?.domains.title}</h2>
          <div className='description'>
            <ul>
            {resume.pt?.domains.list.map((iten, index) => (
                <li key={index}>
                  {iten}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default Domains;
