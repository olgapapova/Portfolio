import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../components/HomePage';

export const PagesRouter = () => {
          
    return (
      <Routes>
        
        <Route path="/" element={<HomePage/>} />
        
      </Routes>
    );
    
};
