import * as Icons from 'phosphor-react';

function Language({ resume }) {
  return (
    <>
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
    </>
  );
}

export default Language;
