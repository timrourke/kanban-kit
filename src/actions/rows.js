import { v4 } from 'uuid';

// Row action types
export const CREATE_ROW     = Symbol('CREATE_ROW');
export const UPDATE_ROW     = Symbol('UPDATE_ROW');
export const DELETE_ROW     = Symbol('DELETE_ROW');

/**
 * Create a new row
 *
 * @param {String} board
 * @param {String} title
 * @return {Object}
 */
export const createRow = (board, title) => ({
  type: CREATE_ROW,
  payload: {
    id: v4(),
    board,
    title,
  },
});

/**
 * Update a row
 *
 * @param {String} id
 * @param {String} board
 * @param {Number} order
 * @param {String} title
 * @return {Object}
 */
export const updateRow = (id, board, order, title) => ({
  type: UPDATE_ROW,
  payload: {
    id,
    board,
    order,
    title,
  },
});

/**
 * Delete a row
 *
 * @param {String} id
 * @return {Object}
 */
export const deleteRow = (id) => ({
  type: DELETE_ROW,
  payload: {id},
});

export default {
  CREATE_ROW,
  UPDATE_ROW,
  DELETE_ROW,
  createRow,
  updateRow,
  deleteRow,
};
