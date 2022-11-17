import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import Education from '../Education/Education';
import Language from '../Language/Language';
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
            <Education resume={resume} />
          </div>
          <div className='col-sm-6 col-lg-12 languages'>
            <Language resume={resume} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
