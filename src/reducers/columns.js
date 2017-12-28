import {
  CREATE_COLUMN,
  UPDATE_COLUMN,
  DELETE_COLUMN,
} from './../actions/columns';

const columns = (state = [], action) => {
  const { payload } = action;

  switch (action.type) {
    case CREATE_COLUMN:
      return [
        ...state,
        Object.assign({}, payload, {
          createdAt: new Date(),
          updatedAt: null,
          deletedAt: null,
        }),
      ];
    case UPDATE_COLUMN:
      return state
        .map((project) => {
          if (project.id !== payload.id) {
            return project;
          }

          return Object.assign({}, project, payload, {
            updatedAt: new Date(),
          });
        });
    case DELETE_COLUMN:
      return state
        .filter((project) => project.id !== payload.id);
    default:
      return state;
  }
}

export default columns;
