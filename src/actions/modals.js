export const SHOW_CREATE_PROJECT_MODAL = Symbol('SHOW_CREATE_PROJECT_MODAL');
export const HIDE_CREATE_PROJECT_MODAL = Symbol('HIDE_CREATE_PROJECT_MODAL');

export const showCreateProjectModal = () => ({
  type: SHOW_CREATE_PROJECT_MODAL,
});

export const hideCreateProjectModal = () => ({
  type: HIDE_CREATE_PROJECT_MODAL,
});

export default {
  SHOW_CREATE_PROJECT_MODAL,
  HIDE_CREATE_PROJECT_MODAL,
  showCreateProjectModal,
  hideCreateProjectModal,
};
