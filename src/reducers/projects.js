import {
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
} from './../actions';

const projects = (state = [], action) => {
  const { payload } = action;

  switch (action.type) {
    case CREATE_PROJECT:
      return [
        ...state,
        Object.assign({}, payload, {
          createdAt: new Date(),
          updatedAt: null,
          deletedAt: null,
        }),
      ];
    case UPDATE_PROJECT:
      return state
        .map((project) => {
          if (project.id !== payload.id) {
            return project;
          }

          return Object.assign({}, project, payload, {
            updatedAt: new Date(),
          });
        });
    case DELETE_PROJECT:
      return state
        .filter((project) => project.id !== payload.id);
    default:
      return state;
  }
}

export default projects;