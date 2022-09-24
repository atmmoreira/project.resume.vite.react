import React from 'react';
import * as Icons from 'phosphor-react';

function SocialMedia({ resume }) {
  return (
    <>
      {resume.pt?.socialmedia.map((i, id) => {
        let DisplayIcon = Icons[`${i.name}`];

        return (
          <li className='mx-1' key={id}>
            <a
              href={i.url}
              target='_blank'
              rel='noreferrer'
              className='btn btn-curriculum rounded-circle d-flex justify-content-center align-items-center'
            >
              <DisplayIcon />
            </a>
          </li>
        );
      })}
    </>
  );
}

export default SocialMedia;
