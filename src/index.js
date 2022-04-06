import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Calculator from './Components/Calculator/Calculator';

ReactDOM.render(
  <div className='calculadoraHolder'>
    <h1>Calculadora</h1>
    <Calculator/>
  </div>,
  document.getElementById('root')
);

