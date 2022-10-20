const React = require('react');
import { render } from 'react-dom';
import MainContainer from '../containers/main.jsx';
import { useState } from 'react';
import NavBar from '../containers/nav.jsx';

const App = (props) => {
  return (
    <div id='container'>
      <MainContainer />
      <NavBar />
    </div>
  );
};

export default App;
