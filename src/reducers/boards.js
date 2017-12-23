import {
  CREATE_BOARD,
  UPDATE_BOARD,
  DELETE_BOARD,
  createBoard,
  updateBoard,
  deleteBoard,
} from './../actions';

const boards = (state = [], action) => {
  const { payload } = action;

  switch (action.type) {
    case CREATE_BOARD:
      return [
        ...state,
        Object.assign({}, payload, {
          createdAt: new Date(),
          updatedAt: null,
          deletedAt: null,
        }),
      ];
    case UPDATE_BOARD:
      return state
        .map((project) => {
          if (project.id !== payload.id) {
            return project;
          }

          return Object.assign({}, project, payload, {
            updatedAt: new Date(),
          });
        });
    case DELETE_BOARD:
      return state
        .filter((project) => project.id !== payload.id);
    default:
      return state;
  }
}

export default boards;