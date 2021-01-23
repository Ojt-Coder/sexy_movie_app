import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 하나의 Virtual DOM 안에 Root JSX Element는 하나만 존재하고
// Root Element 밑에 Component를 붙이고 붙여서 만드는 방식!

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('Sexy')
);


