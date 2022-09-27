import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import HireMe from './pages/HireMe/HireMe';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='curriculum'>
        <div className='row flex-lg-row-reverse flex-sm-row'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='hireme' element={<HireMe />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
