import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'

import { Portfolio } from './components/Portfolio';
//import './firebase';

export const App = () => (
    <Provider store={store}>
      <BrowserRouter>
        <div>
            <Portfolio />  
        </div>
      </BrowserRouter>
    </Provider>
);
