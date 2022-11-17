import React from 'react';
import * as Icons from 'phosphor-react';

function Companies({ resume }) {
  return (
    <>
      {resume.pt?.experiences.map((iten, index) => (
        <div className='description' key={index}>
          <div className='head'>
            <div className='company'>
              <h4>
                <span> {iten.company} ::</span> {iten.position} <br />
                <small>{iten.years}</small>
              </h4>
              <div
                className='control'
                data-bs-toggle='collapse'
                href={`#${iten.identifier}`}
                role='button'
                aria-expanded='false'
                aria-controls={`${iten.identifier}`}
              >
                <Icons.Eye />
              </div>
            </div>
          </div>
          <div
            className='body collapse multi-collapse'
            id={`${iten.identifier}`}
          >
            <p>
              <span>{iten.context.title}:</span> {iten.context.description}
            </p>
            <ul>
              {iten.responsabilities.map((responsability, responsabilityId) => (
                <li key={responsabilityId}>{responsability}</li>
              ))}
            </ul>
            <p>
              <span>{iten.technologies.title}:</span>{' '}
              {iten.technologies.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Companies;
