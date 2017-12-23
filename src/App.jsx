import React, { Component } from 'react';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kanban Kit</h1>
        </header>
        <Board />
      </div>
    );
  }
}

export default App;
