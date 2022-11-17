import React from 'react';
import Experiences from '../Experiences/Experiences';
// Components
import Profile from '../Profile/Profile'
// Styles
import './MainResume.css';

function MainResume({resume}) {
  return (
    <div className='main col-md-9 col-sm-12 p-4'>

      <Profile resume={resume} />
      <Experiences resume={resume} />

      <section className='abilities'>
        <div className='icon'>iconSkills</div>
        <div>
          <h2>Habilidades Técnicas</h2>
          <div className='description'>
            <ul>
              <li>
                <span>15 years:</span> adobe illustrator and ui experience.
              </li>
              <li>
                <span>10 years:</span> html5, css3, adobe photoshop, wordpress,
                bootstrap, zurb foundation and materialui.
              </li>
              <li>
                <span>5 years:</span> javascript, jquery, webpack, sass, figma,
                mysql, git, github, bitbucket and php.
              </li>
              <li>
                <span>1-3 years:</span> react.js, node.js, mongodb, axios,
                fetch, web components, leaflet.js and tailwindcss.
              </li>
              <li>
                <span>Learning:</span> typescript, redux, next.js, nest.js,
                jest, unit tests, tdd, oop, design patterns, micro frontends,
                graphql, jamstack, gatsby, clean code and clean architecture.
              </li>
            </ul>
          </div>
        </div>
      </section>

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
