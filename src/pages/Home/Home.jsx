import React, { useEffect, useState } from 'react';

import MainResume from '../../components/MainResume/MainResume';
import Sidebar from '../../components/Sidebar/Sidebar';

const url = '../../../json/resume.json';

function Home() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const productsApi = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setResumes(data);
    };
    productsApi();
  }, []);

  return (
    <>
      <Sidebar resume={resumes} />
      <MainResume resume={resumes} />
    </>
  );
}
export default Home;
