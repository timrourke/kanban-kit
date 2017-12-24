import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import Board from './components/Board';
import BoardsList from './components/BoardsList';
import configureStore from './configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Kanban Kit</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/boards">Boards</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Route exact path="/boards" component={BoardsList} />
          <Route path="/boards/single" component={Board} />
        </div>
      </Provider>
    );
  }
}

export default App;
