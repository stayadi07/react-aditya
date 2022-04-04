import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blue from './Blue';
import Red from './Red';
import Yellow from './Yellow';

const App = () => {
  return (
    <div className="container">
      <Yellow />
      <Red />
      <Blue />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
