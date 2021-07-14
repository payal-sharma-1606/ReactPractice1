import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import './style.css';

function App() {
  const initialCollection = [
    {
      Id: 1,
      Name: 'First'
    },
    {
      Id: 2,
      Name: 'Second'
    }
  ];

  return <Counter name="Example" collection = {initialCollection} />;
}

render(<App />, document.getElementById('root'));
