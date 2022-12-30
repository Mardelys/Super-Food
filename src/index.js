import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import redux
import { createStore } from 'redux';
import {Provider} from 'react-redux'
//Import reducer component
import Reducer from './components/Reducer';
    const store= createStore(Reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
      </Provider>
   </React.StrictMode>
);
