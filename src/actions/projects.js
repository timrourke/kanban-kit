import { v4 } from 'uuid';

// Project action types
export const CREATE_PROJECT = Symbol('CREATE_PROJECT');
export const UPDATE_PROJECT = Symbol('UPDATE_PROJECT');
export const DELETE_PROJECT = Symbol('DELETE_PROJECT');

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

export default {
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  createProject,
  updateProject,
  deleteProject,
};
