import {
  SHOW_CREATE_PROJECT_MODAL,
  HIDE_CREATE_PROJECT_MODAL,
  SHOW_CREATE_BOARD_MODAL,
  HIDE_CREATE_BOARD_MODAL,
} from './../actions/modals';

const initialState = {
  isShowingModal: false,
  modalShowing: null,
  modalState: {},
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CREATE_BOARD_MODAL:
      return Object.assign({}, state, {
        isShowingModal: true,
        modalShowing: SHOW_CREATE_BOARD_MODAL,
        modalState: {...action.payload},
      });
    case HIDE_CREATE_BOARD_MODAL:
      return Object.assign({}, state, {
        isShowingModal: false,
        modalShowing: null,
        modalState: {},
      });
    case SHOW_CREATE_PROJECT_MODAL:
      return Object.assign({}, state, {
        isShowingModal: true,
        modalShowing: SHOW_CREATE_PROJECT_MODAL,
        modalState: {},
      });
    case HIDE_CREATE_PROJECT_MODAL:
      return Object.assign({}, state, {
        isShowingModal: false,
        modalShowing: null,
        modalState: {},
      });
    default:
      return state;
  }
}

export default modals;
