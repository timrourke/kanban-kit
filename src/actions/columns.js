import { v4 } from 'uuid';

// Column action types
export const CREATE_COLUMN  = Symbol('CREATE_COLUMN');
export const UPDATE_COLUMN  = Symbol('UPDATE_COLUMN');
export const DELETE_COLUMN  = Symbol('DELETE_COLUMN');

/**
 * Create a new column
 *
 * @param {String} board
 * @param {Number} order
 * @param {String} title
 * @return {Object}
 */
export const createColumn = (board, order, title) => ({
  type: CREATE_COLUMN,
  payload: {
    id: v4(),
    board,
    order,
    title,
  },
});

/**
 * Update a column
 *
 * @param {String} id
 * @param {String} board
 * @param {Number} order
 * @param {String} title
 * @return {Object}
 */
export const updateColumn = (id, board, order, title) => ({
  type: UPDATE_COLUMN,
  payload: {
    id,
    board,
    order,
    title,
  },
});

/**
 * Delete a column
 *
 * @param {String} id
 * @return {Object}
 */
export const deleteColumn = (id) => ({
  type: DELETE_COLUMN,
  payload: {id},
});

export default {
  CREATE_COLUMN,
  UPDATE_COLUMN,
  DELETE_COLUMN,
  createColumn,
  updateColumn,
  deleteColumn,
};
