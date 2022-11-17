import React from 'react';
import * as Icons from 'phosphor-react';
import Companies from './Companies';

function Experiences({ resume }) {
  return (
    <>
      <section className='experience'>
        <div className='icon'><Icons.BookmarksSimple /></div>
        <div className='w-100'>
          <h2>Experiências Profissionais</h2>
          <Companies resume={resume} />
        </div>
      </section>
    </>
  );
}

export default Experiences;
