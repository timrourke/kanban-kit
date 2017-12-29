import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouterAndQueryParsing from './withRouterAndQueryParsing';

class BoardsList extends Component {
  render() {
    const projectId = this.props.match.params.projectId;
    const boardsLinkPrefix = `/projects/${projectId}/boards`;
    const createBoardsLink = `${boardsLinkPrefix}/create`;

    return (
      <div className='BoardsList'>
        <div className='table'>
          <header className='table-header'>
            <h3 className='table-title'>Boards</h3>
            <div className='table-action'>
              <Link
                className='button'
                to={createBoardsLink}
              >
                Create a new Board
              </Link>
            </div>
          </header>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {this.props.boards.map((board) => {
                const boardLink = `${boardsLinkPrefix}/${board.id}`;

                return (
                  <tr key={board.id}>
                    <td>
                      <Link to={boardLink}>{board.title}</Link>
                    </td>
                    <td>
                      <Link to={boardLink}>{board.createdAt}</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouterAndQueryParsing(BoardsList);
