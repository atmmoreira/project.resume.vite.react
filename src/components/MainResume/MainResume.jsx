import React from 'react';
import Abilities from '../Abilities/Abilities';
import Experiences from '../Experiences/Experiences';
import Profile from '../Profile/Profile';
import './MainResume.css';

function MainResume({ resume }) {
  return (
    <div className='main col-md-9 col-sm-12 p-4'>
      <Profile resume={resume} />
      <Experiences resume={resume} />
      <Abilities resume={resume} />

      <section className='courses'>
        <div className='icon'>iconMonitor</div>
        <div>
          <h2>Cursos</h2>
          <div className='description'>
            <ul>
              <li>
                Docker para desenvolvedores Javascript/Node.js -{' '}
                <a
                  href='https://atmm.dev/docs/certificates/udemy/docker-para-desenvolvedores-javascript-nodejs.pdf'
                  target='_blank'
                >
                  Verificar
                </a>
              </li>
              <li>
                Docker: Essencial para desenvolvedores -{' '}
                <a
                  href='https://atmm.dev/docs/certificates/udemy/docker-ferramenta-essencial-para-desenvolvedores.pdf'
                  target='_blank'
                >
                  Verificar
                </a>
              </li>
              <li>
                Frontend Web Developer -{' '}
                <a
                  href='https://atmm.dev/docs/certificates/digital-innovation-one/formacao-desenvolvedor-web-frontend.pdf'
                  target='_blank'
                >
                  Verificar
                </a>
              </li>
              <li>
                HTML Web Developer -{' '}
                <a
                  href='https://atmm.dev/docs/certificates/digital-innovation-one/formacao-html-web-developer.pdf'
                  target='_blank'
                >
                  Verificar
                </a>
              </li>
              <li>
                Node.js Web Developer -{' '}
                <a
                  href='https://atmm.dev/docs/certificates/digital-innovation-one/formacao-nodejs-web-developer.pdf'
                  target='_blank'
                >
                  Verificar
                </a>
              </li>
              <li>
                PHP Developer -{' '}
                <a
                  href='https://atmm.dev/docs/certificates/digital-innovation-one/formacao-desenvolvedor-php.pdf'
                  target='_blank'
                >
                  Verificar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

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
