import React, { useEffect, useState } from 'react';
import './App.css';

const url = './json/resume.json';

import Header from './components/Header/Header';
import MainResume from './components/MainResume/MainResume';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
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
    <div className='container'>
      <Header />
      <div className='curriculum'>
        <div className='row flex-lg-row-reverse flex-sm-row'>
          <Sidebar resume={resumes} />
          <MainResume />
        </div>
      </div>
    </div>
  );
}

export default App;
