import {
  CREATE_ROW,
  UPDATE_ROW,
  DELETE_ROW,
} from './../actions/rows';

const rows = (state = [], action) => {
  const { payload } = action;

  switch (action.type) {
    case CREATE_ROW:
      return [
        ...state,
        Object.assign({}, payload, {
          createdAt: new Date(),
          updatedAt: null,
          deletedAt: null,
        }),
      ];
    case UPDATE_ROW:
      return state
        .map((project) => {
          if (project.id !== payload.id) {
            return project;
          }

          return Object.assign({}, project, payload, {
            updatedAt: new Date(),
          });
        });
    case DELETE_ROW:
      return state
        .filter((project) => project.id !== payload.id);
    default:
      return state;
  }
}

export default rows;
