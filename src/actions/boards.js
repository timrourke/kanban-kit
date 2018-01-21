import { v4 } from 'uuid';
import { createColumn } from './columns';
import { createRow } from './rows';

// Board action types
export const CREATE_BOARD = Symbol('CREATE_BOARD');
export const UPDATE_BOARD = Symbol('UPDATE_BOARD');
export const DELETE_BOARD = Symbol('DELETE_BOARD');

/**
 * Create a new board
 *
 * @param {String} project
 * @param {String} title
 * @return {Object}
 */
export const createBoard = (project, title) => ({
  type: CREATE_BOARD,
  payload: {
    id: v4(),
    project,
    title,
  },
});

/**
 * Create a new board with columns and row
 *
 * @param {String} project
 * @param {String} title
 * @return {Function}
 */
export const createBoardWithColumnsAndRow = (project, title, columnTitles) => (dispatch, getState) => {
  const createBoardAction = createBoard(project, title);

  dispatch(createBoardAction);

  const newBoard = getState()
    .boards
    .reduce((acc, current) => {
      return (current.id === createBoardAction.id && current) || acc;
    });

  columnTitles.forEach((columnTitle, index) => {
    dispatch(createColumn(newBoard.id, index + 1, columnTitle));
  });

  dispatch(createRow(newBoard.id, 'Untitled Row'));
};

/**
 * Update a board
 *
 * @param {String} id
 * @param {String} project
 * @param {String} title
 * @return {Object}
 */
export const updateBoard = (id, project, title) => ({
  type: UPDATE_BOARD,
  payload: {
    id,
    project,
    title,
  },
});

/**
 * Delete a board
 *
 * @param {String} id
 * @return {Object}
 */
export const deleteBoard = (id) => ({
  type: DELETE_BOARD,
  payload: {id},
});

export default {
  CREATE_BOARD,
  UPDATE_BOARD,
  DELETE_BOARD,
  createBoard,
  updateBoard,
  deleteBoard,
};
