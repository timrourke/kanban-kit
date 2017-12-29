import { createStore } from 'redux';

import {
  SHOW_CREATE_PROJECT_MODAL,
  showCreateProjectModal,
  hideCreateProjectModal,
} from './../actions/modals';

import modals from './modals';

describe('reducers/modals', () => {
  it('should create a valid store', () => {
    const store = createStore(modals);

    expect(store.getState()).toMatchObject({
      isShowingModal: false,
      modalShowing: null,
    });
  });

  it('should show create project modal', () => {
    const store = createStore(modals);

    expect(store.getState()).toMatchObject({
      isShowingModal: false,
      modalShowing: null,
    });

    store.dispatch(showCreateProjectModal());

    expect(store.getState()).toMatchObject({
      isShowingModal: true,
      modalShowing: SHOW_CREATE_PROJECT_MODAL,
    });
  });

  it('should hide create project modal', () => {
    const store = createStore(modals);

    expect(store.getState()).toMatchObject({
      isShowingModal: false,
      modalShowing: null,
    });

    store.dispatch(showCreateProjectModal());

    expect(store.getState()).toMatchObject({
      isShowingModal: true,
      modalShowing: SHOW_CREATE_PROJECT_MODAL,
    });

    store.dispatch(hideCreateProjectModal());

    expect(store.getState()).toMatchObject({
      isShowingModal: false,
      modalShowing: null,
    });
  });
});
