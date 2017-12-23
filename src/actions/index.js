import { v4 } from 'uuid';

// Project action types
export const CREATE_PROJECT = Symbol('CREATE_PROJECT');
export const UPDATE_PROJECT = Symbol('UPDATE_PROJECT');
export const DELETE_PROJECT = Symbol('DELETE_PROJECT');

// Board action types
export const CREATE_BOARD   = Symbol('CREATE_BOARD');
export const UPDATE_BOARD   = Symbol('UPDATE_BOARD');
export const DELETE_BOARD   = Symbol('DELETE_BOARD');

// Column action types
export const CREATE_COLUMN  = Symbol('CREATE_COLUMN');
export const UPDATE_COLUMN  = Symbol('UPDATE_COLUMN');
export const DELETE_COLUMN  = Symbol('DELETE_COLUMN');

// Row action types
export const CREATE_ROW     = Symbol('CREATE_ROW');
export const UPDATE_ROW     = Symbol('UPDATE_ROW');
export const DELETE_ROW     = Symbol('DELETE_ROW');

// Card action types
export const CREATE_CARD    = Symbol('CREATE_CARD');
export const UPDATE_CARD    = Symbol('UPDATE_CARD');
export const DELETE_CARD    = Symbol('DELETE_CARD');

/**
 * Create a new project
 *
 * @param {String} title
 * @return {Object}
 */
export const createProject = (title) => ({
  type: CREATE_PROJECT,
  payload: {
    id: v4(),
    title,
  },
});

/**
 * Update a project
 *
 * @param {String} id
 * @param {String} title
 * @return {Object}
 */
export const updateProject = (id, title) => ({
  type: UPDATE_PROJECT,
  payload: {
    id,
    title,
  },
});

/**
 * Delete a project
 *
 * @param {String} id
 * @return {Object}
 */
export const deleteProject = (id) => ({
  type: DELETE_PROJECT,
  payload: {id},
});

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

/**
 * Create a new column
 *
 * @param {String} board
 * @param {String} title
 * @return {Object}
 */
export const createColumn = (board, title) => ({
  type: CREATE_COLUMN,
  payload: {
    id: v4(),
    board,
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

/**
 * Create a new row
 *
 * @param {String} title
 * @return {Object}
 */
export const createRow = (title) => ({
  type: CREATE_ROW,
  payload: {
    id: v4(),
    title,
  },
});

/**
 * Update a row
 *
 * @param {String} id
 * @param {String} title
 * @param {Number} order
 * @return {Object}
 */
export const updateRow = (id, title, order) => ({
  type: UPDATE_ROW,
  payload: {
    id,
    title,
    order,
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
 * @param {String} title
 * @return {Object}
 */
export const createCard = (column, title) => ({
  type: CREATE_CARD,
  payload: {
    id: v4(),
    column,
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