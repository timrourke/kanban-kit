import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class BoardsList extends Component {
  render() {
    const projectId = this.props.match.params.projectId;
    const boardsLinkPrefix = `/projects/${projectId}/boards`;
    const createBoardsLink = `${boardsLinkPrefix}/create`;

    return (
      <div className="BoardsList">
        <header className="BoardsList-header">
          <h3>Boards</h3>
        </header>
        <ul>
          {this.props.boards.map((board) => {
            const boardLink = `${boardsLinkPrefix}/${board.id}`;

            return (
              <li key={board.id}>
                <Link to={boardLink}>{board.title}</Link>
              </li>
            );
          })}
          <li>
            <Link to={createBoardsLink}>Create a new Board</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(BoardsList);
