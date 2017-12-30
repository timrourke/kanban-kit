// Create project modal state
export const SHOW_CREATE_PROJECT_MODAL = Symbol('SHOW_CREATE_PROJECT_MODAL');
export const HIDE_CREATE_PROJECT_MODAL = Symbol('HIDE_CREATE_PROJECT_MODAL');

export const showCreateProjectModal = () => ({
  type: SHOW_CREATE_PROJECT_MODAL,
});

export const hideCreateProjectModal = () => ({
  type: HIDE_CREATE_PROJECT_MODAL,
});

// Create board modal state
export const SHOW_CREATE_BOARD_MODAL   = Symbol('SHOW_CREATE_BOARD_MODAL');
export const HIDE_CREATE_BOARD_MODAL   = Symbol('HIDE_CREATE_BOARD_MODAL');

export const showCreateBoardModal = () => ({
  type: SHOW_CREATE_BOARD_MODAL,
});

export const hideCreateBoardModal = () => ({
  type: HIDE_CREATE_BOARD_MODAL,
});

export default {
  SHOW_CREATE_BOARD_MODAL,
  HIDE_CREATE_BOARD_MODAL,
  SHOW_CREATE_PROJECT_MODAL,
  HIDE_CREATE_PROJECT_MODAL,
  showCreateBoardModal,
  hideCreateBoardModal,
  showCreateProjectModal,
  hideCreateProjectModal,
};
