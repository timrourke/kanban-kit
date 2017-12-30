import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouterAndQueryParsing from './withRouterAndQueryParsing';
import { parseDate } from './../utils/date';

class BoardsList extends Component {
  /**
   * Get the boards that belong to a given project by project's ID
   *
   * @param {String} projectId
   * @return {Object[]}
   */
  getBoardsForProject(projectId) {
    return this.props.boards.filter((board) => board.project === projectId);
  }

  render() {
    const projectId = this.props.match.params.projectId;
    const boardsLinkPrefix = `/projects/${projectId}/boards`;
    const createBoardsLink = `${boardsLinkPrefix}/create`;

    return (
      <main className='BoardsList'>
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
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {this.getBoardsForProject(projectId).map((board) => {
                const boardLink = `${boardsLinkPrefix}/${board.id}`;

                return (
                  <tr key={board.id}>
                    <td>
                      <Link to={boardLink}>{board.title}</Link>
                    </td>
                    <td>
                      <Link to={boardLink}>{parseDate(board.createdAt)}</Link>
                    </td>
                    <td>
                      <Link to={boardLink}>{parseDate(board.updatedAt)}</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default withRouterAndQueryParsing(BoardsList);
