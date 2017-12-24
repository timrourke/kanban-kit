import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoardsList extends Component {
  render() {
    return (
      <div className="BoardsList">
        <header className="BoardsList-header">
          <h3>Boards</h3>
        </header>
        <ul>
          <li>
            <Link to="/boards/single">Board</Link>
          </li>
          <li>
            <Link to="/boards/create">Create a new Board</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default BoardsList;
