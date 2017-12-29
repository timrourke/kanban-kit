import {
  SHOW_CREATE_PROJECT_MODAL,
  HIDE_CREATE_PROJECT_MODAL,
} from './../actions/modals';

const initialState = {
  isShowingModal: false,
  modalShowing: null,
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CREATE_PROJECT_MODAL:
      return Object.assign({}, state, {
        isShowingModal: true,
        modalShowing: SHOW_CREATE_PROJECT_MODAL,
      });
    case HIDE_CREATE_PROJECT_MODAL:
      return Object.assign({}, state, {
        isShowingModal: false,
        modalShowing: null,
      });
    default:
      return state;
  }
}

export default modals;
