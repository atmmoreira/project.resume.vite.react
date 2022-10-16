import React from 'react';
// Components
import Profile from '../Profile/Profile'
// Styles
import './MainResume.css';

function MainResume({resume}) {
  return (
    <div className='main col-md-9 col-sm-12 p-4'>

      <Profile resume={resume} />
      <section className='experience'>
        <div className='icon'>iconCertificated</div>
        <div className='w-100'>
          <h2>Experiências Profissionais</h2>
          <div className='description'>
            <div className='head'>
              <div className='company'>
                <h4>
                  <span> Globant ::</span> Frontend Web UI Developer - Rio de
                  Janeiro, Brasil. <br />
                  <small>02/2022 - present</small>
                </h4>
                <div
                  className='control'
                  data-bs-toggle='collapse'
                  href='#globant'
                  role='button'
                  aria-expanded='false'
                  aria-controls='globant'
                >
                  iconEyes
                </div>
              </div>
            </div>
            <div className='body collapse multi-collapse' id='globant'>
              <p>
                <span>Contexto:</span> Alocado no Jornal Estadão de São Paulo
                trabalhando na construção e manutenção de portais notícias.
              </p>
              <ul>
                <li>
                  Manutenção e desenvolvimento em portais de notícias com php,
                  html5, css3, sass, javascript, web components, react.js,
                  vue.js, tailwindcss e bootstrap.
                </li>
                <li>
                  Utilização do Zephr para acesso/automatização de conteúdos e
                  fluxos.
                </li>
                <li>Uso do Optimize360 para Testes A/B.</li>
                <li>Gerenciamento de notícias com wordpress.</li>
                <li>
                  Uso de ferramentas no dia-a-dia como storybook, jira, clickup,
                  git, github e bitbucket.
                </li>
              </ul>
              <p>
                <span>Tecnologias:</span> html5, css3, sass, tailwindcss,
                bootstrap, javascript, storybook, react.js, vue.js, git, github,
                bitbucket, jira, scrum, optimize360, web components, php, rest
                api e node.
              </p>
            </div>
          </div>

          <div className='description'>
            <div className='head'>
              <div className='company'>
                <h4>
                  <span> Thera Solutions ::</span> Frontend Developer - Rio de
                  Janeiro, Brasil. <br />
                  <small>01/2021 - 01/2022</small>
                </h4>
                <div
                  className='control'
                  data-bs-toggle='collapse'
                  href='#thera'
                  role='button'
                  aria-expanded='false'
                  aria-controls='thera'
                >
                  iconEyes
                </div>
              </div>
            </div>
            <div className='body collapse multi-collapse' id='thera'>
              <p>
                <span>Contexto:</span> Alocado na emissora TV GLOBO, trabalhando
                na construção e manutenção de portais e dashboards de seus
                produtos internos.
              </p>
              <ul>
                <li>
                  Manutenção e desenvolvimento com html5, css3 e javascript.
                </li>
                <li>
                  Consumo de webservices restfull com vue.js, vuex e vuetify.
                </li>
                <li>
                  Uso de Microsoft Power Automate para automatização de envio de
                  emails.
                </li>
                <li>
                  Utilização do Microsoft Sharepoint na criação de listas,
                  tabelas e bibliotecas de documentos.
                </li>
                <li>
                  Versionamento de códigos com git, github, gitlab e azure
                  devops.
                </li>
              </ul>
              <p>
                <span>Tecnologias:</span> html5, css3, sass, javascript, vue.js,
                vuex, vuetify, git, gitlab, azure devops, scrum, microsoft power
                automate, microsoft sharepoint, rest api e node.
              </p>
            </div>
          </div>

          <div className='description'>
            <div className='head'>
              <div className='company'>
                <h4>
                  <span> Tiplan ::</span> Frontend Developer - Rio de Janeiro,
                  Brasil. <br />
                  <small>06/2019 - 10/2020</small>
                </h4>
                <div
                  className='control'
                  data-bs-toggle='collapse'
                  href='#tiplan'
                  role='button'
                  aria-expanded='false'
                  aria-controls='tiplan'
                >
                  iconEyes
                </div>
              </div>
            </div>
            <div className='body collapse multi-collapse' id='tiplan'>
              <p>
                <span>Contexto:</span> Empresa especializada em desenvolvimento
                de soluções de gestão tributária para profissionais liberais.
              </p>
              <ul>
                <li>
                  Criação de layouts e wireframes com figma e illustrator.
                </li>
                <li>
                  Gerenciamento e versionamento de códigos utilizando azure
                  devops.
                </li>
                <li>
                  Manutenção e desenvolvimento do frontend de sistemas web
                  criados em ASP.NET com html5, css3, sass, javascript,
                  react.js, reactstrap, styled-components e css-in-js.
                </li>
              </ul>
              <p>
                <span>Tecnologias:</span> html5, css3, sass, javascript,
                react.js, bootstrap, azure devops e scrum.
              </p>
            </div>
          </div>

          <div className='description'>
            <div className='head'>
              <div className='company'>
                <h4>
                  <span>ATSNET Solutions ::</span> Frontend Developer - Rio de
                  Janeiro, Brasil. <br />
                  <small>09/2018 - 04/2019</small>
                </h4>
                <div
                  className='control'
                  data-bs-toggle='collapse'
                  href='#atsnet'
                  role='button'
                  aria-expanded='false'
                  aria-controls='atsnet'
                >
                  iconEyes
                </div>
              </div>
            </div>
            <div className='body collapse multi-collapse' id='atsnet'>
              <p>
                <span>Contexto:</span> Empresa especializada em consultoria,
                gerenciamento e desenvolvimento de projetos e softwares.
              </p>
              <ul>
                <li>
                  Criação de layouts com figma e illustrator. Manutenção em
                  websites com wordpress.
                </li>
                <li>
                  Gerenciamento e versionamento de códigos utilizando azure
                  devops.
                </li>
                <li>
                  Manutenção em sistemas criados em ASP.NET com html5, css3,
                  javascript, react.js.
                </li>
                <li>
                  Utilização da biblioteca leaflet.js para georreferenciamento.
                </li>
              </ul>
              <p>
                <span>Tecnologias:</span> html5, css3, sass, javascript, jquery,
                react.js, bootstrap, azure devops, leaflet.js e scrum.
              </p>
            </div>
          </div>

          <div className='description'>
            <div className='head'>
              <div className='company'>
                <h4>
                  <span>Mediatrust ::</span> Frontend Developer - Lisboa,
                  Portugal. <br />
                  <small>12/2017 - 08/2018</small>
                </h4>
                <div
                  className='control'
                  data-bs-toggle='collapse'
                  href='#mediatrust'
                  role='button'
                  aria-expanded='false'
                  aria-controls='mediatrust'
                >
                  iconEyes
                </div>
              </div>
            </div>
            <div className='body collapse multi-collapse' id='mediatrust'>
              <p>
                <span>Contexto:</span> Agência focada em consultoria de
                comunicação, marketing e relações públicas.
              </p>
              <ul>
                <li>
                  Criação de layouts com figma e illustrator. Manutenção em
                  websites com wordpress.
                </li>
                <li>
                  Gerenciamento e versionamento de códigos utilizando azure
                  devops.
                </li>
                <li>
                  Manutenção em sistemas criados em ASP.NET com html5, css3,
                  javascript, react.js.
                </li>
                <li>
                  Utilização da biblioteca leaflet.js para georreferenciamento.
                </li>
              </ul>
              <p>
                <span>Tecnologias:</span> html5, css3, sass, javascript, jquery,
                react.js, bootstrap, azure devops, leaflet.js e scrum.
              </p>
            </div>
          </div>

          <div className='description'>
            <div className='head'>
              <div className='company'>
                <h4>
                  <span>LDC comex ::</span> Frontend Developer - Rio de Janeiro,
                  Brasil. <br />
                  <small>11/2015 - 11/2017</small>
                </h4>
                <div
                  className='control'
                  data-bs-toggle='collapse'
                  href='#ldccomex'
                  role='button'
                  aria-expanded='false'
                  aria-controls='ldccomex'
                >
                  iconEyes
                </div>
              </div>
            </div>
            <div className='body collapse multi-collapse' id='ldccomex'>
              <p>
                <span>Contexto:</span> Empresa que atua com mercado aduaneiro e
                tributário.
              </p>
              <ul>
                <li>
                  Implementação, manutenção e desenvolvimento do frontend de
                  sistemas criados em ASP.NET com html5, css3, sass, javascript
                  e bootstrap.
                </li>
                <li>
                  Implementação, manutenção e desenvolvimento de websites com
                  wordpress.
                </li>
              </ul>
              <p>
                <span>Tecnologias:</span> html5, css3, sass, javascript, jquery,
                bootstrap, php e wordpress.
              </p>
            </div>
          </div>
        </div>
      </section>

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
