// third party modifiers
import React from 'react';
import './App.css';

//Self made components
import Calculator from './components/Calculator'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
