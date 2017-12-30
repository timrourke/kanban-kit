import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouterAndQueryParsing from './withRouterAndQueryParsing';
import { parseDate } from './../utils/date';
import qs from 'query-string';

/**
 * Hide the create board modal
 */
export const hideCreateBoardModal = function hideCreateBoardModal() {
  const currentQueryParams = Object.assign({}, this.props.queryParams);

  // Return early if the modal's query param isn't set
  if (!('createBoard' in currentQueryParams)) {
    return;
  }

  delete currentQueryParams.createBoard;

  const encodedQueryParams = qs.stringify(
    currentQueryParams,
    {arrayFormat: 'bracket'}
  );

  this.props.hideCreateBoardModal();
  this.props.history.push(`${this.state.boardsLinkPrefix}?${encodedQueryParams}`);
}

class BoardsList extends Component {
  /**
   * Constructor.
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    const projectId = props.match.params.projectId;
    const boardsLinkPrefix = `/projects/${projectId}/boards`;
    const createBoardsLink = `${boardsLinkPrefix}/create`;

    this.state = {
      projectId,
      boardsLinkPrefix,
      createBoardsLink,
    };
  }

  /**
   * Get a string of query params with `createBoard=1` added
   *
   * @return {String}
   */
  getQueryStringWithCreateBoard() {
    const { queryParams } = this.props;
    const queryParamsWithCreateBoard = Object.assign({}, queryParams, {
      createBoard: 1,
    });

    return qs.stringify(queryParamsWithCreateBoard, {arrayFormat: 'bracket'});
  }

  /**
   * Whether to show the create board modal
   *
   * @param {Object} queryParams
   * @return {Boolean}
   */
  shouldShowCreateBoardModal(queryParams = {}) {
    return !!(
      'createBoard' in queryParams &&
      parseInt(queryParams.createBoard, 10) === 1
    );
  }

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
    return (
      <main className='BoardsList'>
        <div className='table'>
          <header className='table-header'>
            <h3 className='table-title'>Boards</h3>
            <div className='table-action'>
              <Link
                className='button'
                to={this.state.createBoardsLink}
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
              {this.getBoardsForProject(this.state.projectId).map((board) => {
                const boardLink = `${this.state.boardsLinkPrefix}/${board.id}`;

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
