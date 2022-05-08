import React from 'react';
import { Counter } from './Counter'
import { CounterWithNoDecorator } from './CounterOld'
import './App.css';

function App() {
  return (
    <div className="App">
      <br />
      <Counter msg='good' />
      <br />
      <hr />
      <br />
      <CounterWithNoDecorator msg='World' />
    </div>
  );
}

export default App;
