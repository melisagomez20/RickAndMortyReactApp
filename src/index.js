import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter as Router, Routes,Route} from "react-router-dom";

import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Contact from './pages/Contact/Contact';


import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/characters' element={<Characters/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
  </React.StrictMode>
);

