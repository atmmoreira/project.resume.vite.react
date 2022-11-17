import React, { useEffect, useState } from 'react';

import MainResume from '../../components/MainResume/MainResume';
import Sidebar from '../../components/Sidebar/Sidebar';

const url = '../../../json/resume.json';

function Home() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const resumeApi = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setResumes(data);
    };
    resumeApi();
  }, []);

  return (
    <>
      <Sidebar resume={resumes} />
      <MainResume resume={resumes} />
    </>
  );
}
export default Home;
