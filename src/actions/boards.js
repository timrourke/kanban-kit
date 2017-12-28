import { v4 } from 'uuid';

// Board action types
export const CREATE_BOARD   = Symbol('CREATE_BOARD');
export const UPDATE_BOARD   = Symbol('UPDATE_BOARD');
export const DELETE_BOARD   = Symbol('DELETE_BOARD');

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
