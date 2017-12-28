import { v4 } from 'uuid';

// Row action types
export const CREATE_ROW     = Symbol('CREATE_ROW');
export const UPDATE_ROW     = Symbol('UPDATE_ROW');
export const DELETE_ROW     = Symbol('DELETE_ROW');

// Card action types
export const CREATE_CARD    = Symbol('CREATE_CARD');
export const UPDATE_CARD    = Symbol('UPDATE_CARD');
export const DELETE_CARD    = Symbol('DELETE_CARD');

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

/**
 * Create a new card
 *
 * @param {String} column
 * @param {String} row
 * @param {String} title
 * @return {Object}
 */
export const createCard = (column, row, title) => ({
  type: CREATE_CARD,
  payload: {
    id: v4(),
    column,
    row,
    title,
  },
});

/**
 * Update a card
 *
 * @param {String} id
 * @param {String} column
 * @param {Number} order
 * @param {String} title
 * @return {Object}
 */
export const updateCard = (id, column, order, title) => ({
  type: UPDATE_CARD,
  payload: {
    id,
    column,
    order,
    title,
  },
});

/**
 * Delete a card
 *
 * @param {String} id
 * @return {Object}
 */
export const deleteCard = (id) => ({
  type: DELETE_CARD,
  payload: {id},
});
