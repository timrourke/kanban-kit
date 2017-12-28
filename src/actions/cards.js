import { v4 } from 'uuid';

// Card action types
export const CREATE_CARD    = Symbol('CREATE_CARD');
export const UPDATE_CARD    = Symbol('UPDATE_CARD');
export const DELETE_CARD    = Symbol('DELETE_CARD');

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

export default {
  CREATE_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  createCard,
  updateCard,
  deleteCard,
};
