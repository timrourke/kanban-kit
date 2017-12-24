import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import AppHeaderContainer from './containers/AppHeaderContainer';
import Board from './components/Board';
import BoardsListContainer from './containers/BoardsListContainer';
import CreateBoardContainer from './containers/CreateBoardContainer';

import configureStore from './configureStore';

const store = configureStore();

console.log('store', store)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppHeaderContainer />
            <Route exact path="/boards" component={BoardsListContainer} />
            <Route path="/boards/single" component={Board} />
            <Route path="/boards/create" component={CreateBoardContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
