import { createStore } from 'redux';

import {
  SHOW_CREATE_PROJECT_MODAL,
  SHOW_CREATE_BOARD_MODAL,
  showCreateBoardModal,
  hideCreateBoardModal,
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
      modalState: {},
    });
  });

  it('should show create project modal', () => {
    const store = createStore(modals);

    expect(store.getState()).toMatchObject({
      isShowingModal: false,
      modalShowing: null,
      modalState: {},
    });

    store.dispatch(showCreateProjectModal());

    expect(store.getState()).toMatchObject({
      isShowingModal: true,
      modalShowing: SHOW_CREATE_PROJECT_MODAL,
      modalState: {},
    });
  });

  it('should hide create project modal', () => {
    const store = createStore(modals);

    expect(store.getState()).toMatchObject({
      isShowingModal: false,
      modalShowing: null,
      modalState: {},
    });

    store.dispatch(showCreateProjectModal());

    expect(store.getState()).toMatchObject({
      isShowingModal: true,
      modalShowing: SHOW_CREATE_PROJECT_MODAL,
      modalState: {},
    });

    store.dispatch(hideCreateProjectModal());

    expect(store.getState()).toMatchObject({
      isShowingModal: false,
      modalShowing: null,
      modalState: {},
    });
  });

  it('should show create board modal', () => {
    const store = createStore(modals);

    expect(store.getState()).toMatchObject({
      isShowingModal: false,
      modalShowing: null,
      modalState: {},
    });

    store.dispatch(showCreateBoardModal('some-project-id'));

    expect(store.getState()).toMatchObject({
      isShowingModal: true,
      modalShowing: SHOW_CREATE_BOARD_MODAL,
      modalState: {
        projectId: 'some-project-id',
      },
    });
  });

  it('should hide create board modal', () => {
    const store = createStore(modals);

    expect(store.getState()).toMatchObject({
      isShowingModal: false,
      modalShowing: null,
      modalState: {},
    });

    store.dispatch(showCreateBoardModal());

    expect(store.getState()).toMatchObject({
      isShowingModal: true,
      modalShowing: SHOW_CREATE_BOARD_MODAL,
      modalState: {},
    });

    store.dispatch(hideCreateBoardModal());

    expect(store.getState()).toMatchObject({
      isShowingModal: false,
      modalShowing: null,
      modalState: {},
    });
  });
});
