import {
  SHOW_CREATE_PROJECT_MODAL,
  HIDE_CREATE_PROJECT_MODAL,
} from './../actions/modals';

const initialState = {
  isShowingCreateProjectModal: false,
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CREATE_PROJECT_MODAL:
      return Object.assign({}, state, {
        isShowingCreateProjectModal: true,
      });
    case HIDE_CREATE_PROJECT_MODAL:
      return Object.assign({}, state, {
        isShowingCreateProjectModal: false,
      });
    default:
      return state;
  }
}

export default modals;
