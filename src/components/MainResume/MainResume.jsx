import React from 'react';
import Abilities from '../Abilities/Abilities';
import Courses from '../Courses/Courses';
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

      <section className='compentences'>
        <div className='icon'>iconDomains</div>
        <div>
          <h2>Competência de Domínios</h2>
          <div className='description'>
            <ul>
              <li>
                Implementação, manutenção, desenvolvimento websites corporativos
                e institucionais com wordpress.
              </li>
              <li>Habilidade de comunicação sobre detalhes técnicos.</li>
              <li>
                Trabalho independente e/ou próximo da squad para desenvolvimento
                da mesma.
              </li>
              <li>
                Participação de planejamento de aplicações web do início até
                deploy em produção.
              </li>
              <li>
                Criação de mockups, layouts e wireframes com figma e
                illustrator.
              </li>
              <li>
                Desenvolvimento de aplicações web com html5, css3, sass,
                javascript, jquery, php e bootstrap.
              </li>
              <li>Sólida experiência como UI Designer.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default MainResume;
