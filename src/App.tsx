import React from 'react';
import { Counter, CounterWithNoDecorator } from './Counter'
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterWithNoDecorator />
    </div>
  );
}

export default App;
