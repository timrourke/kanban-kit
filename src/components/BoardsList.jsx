import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoardsList extends Component {
  render() {
    return (
      <div className="BoardsList">
        <h4>Boards</h4>
        <ul>
          <li>
            <Link to="/boards/single">Board</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default BoardsList;