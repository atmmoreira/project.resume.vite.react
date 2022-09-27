import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import * as Icons from 'phosphor-react';

import './Sidebar.css';

function Sidebar({ resume }) {
  return (
    <>
      <div className='sidebar col-md-3'>
        <div className='row text-center'>
          <div className='col-sm-6 col-lg-12'>
            <img src={resume.pt?.avatar} alt='Avatar' className='img-fluid' />
          </div>
          <div className='col-sm-6 col-lg-12 d-flex flex-column align-items-center mt-sm-5 mt-lg-0'>
            <h2>{resume.pt?.name}</h2>
            <small>{resume.pt?.position}</small>
            <a
              href='#'
              className='btn btn-curriculum mt-3 btn-sm d-flex align-items-center justify-content-center'
            >
              <Icons.FilePdf />
              <span className='mx-1'> Download pdf</span>
            </a>
          </div>
        </div>
        <div className='row'>
          <ul className='list-unstyled d-flex justify-content-center mt-3 social'>
            <SocialMedia resume={resume} />
          </ul>
        </div>
        <div className='row languages-education'>
          <div className='col-sm-6 col-lg-12 education'>
            <div className='d-flex align-items-center mb-2'>
              <Icons.Student />
              <h2>{resume.pt?.education.title}</h2>
            </div>
            <ul>
              {resume.pt?.education.description.map((iten, index) => (
                <li key={index}>{iten}</li>
              ))}
            </ul>
          </div>
          <div className='col-sm-6 col-lg-12 languages'>
            <div className='d-flex align-items-center mb-2'>
              <Icons.Translate />
              <h2>{resume.pt?.languages.title}</h2>
            </div>
            <ul>
              {resume.pt?.languages.description.map((iten, index) => (
                <li key={index}>
                  {iten.name}: {iten.level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
