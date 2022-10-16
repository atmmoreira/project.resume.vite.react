import * as Icons from 'phosphor-react';

function Education({ resume }) {
  return (
    <>
      <div className='d-flex align-items-center mb-2'>
        <Icons.Student />
        <h2>{resume.pt?.education.title}</h2>
      </div>
      <ul>
        {resume.pt?.education?.description.map((iten, index) => (
          <li key={index} className='mb-3'>
            <h4>{iten.university}</h4> <br />
            <small>
              {iten.course} <br /> {iten.year}
            </small>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Education;
