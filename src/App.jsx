import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import AppHeaderContainer from './containers/AppHeaderContainer';
import Board from './components/Board';
import BoardsListContainer from './containers/BoardsListContainer';
import CreateBoardContainer from './containers/CreateBoardContainer';
import ProjectsListContainer from './containers/ProjectsListContainer';
import CreateProjectContainer from './containers/CreateProjectContainer';

import configureStore from './configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppHeaderContainer />
            <Switch>
              <Route exact path="/projects" component={ProjectsListContainer} />
              <Route exact path="/projects/create" component={CreateProjectContainer} />
              <Route exact path="/projects/:projectId" component={BoardsListContainer} />
              <Route exact path="/projects/:projectId/boards" component={BoardsListContainer} />
              <Route exact path="/projects/:projectId/boards/create" component={CreateBoardContainer} />
              <Route exact path="/projects/:projectId/boards/:boardId" component={Board} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
