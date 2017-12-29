import { createStore } from 'redux';

import {
  showCreateProjectModal,
  hideCreateProjectModal,
} from './../actions/modals';

import modals from './modals';

describe('reducers/modals', () => {
  it('should create a valid store', () => {
    const store = createStore(modals);

    expect(store.getState()).toMatchObject({
      isShowingCreateProjectModal: false,
    });
  });

  it('should show create project modal', () => {
    const store = createStore(modals);

    expect(store.getState()).toMatchObject({
      isShowingCreateProjectModal: false,
    });

    store.dispatch(showCreateProjectModal());

    expect(store.getState()).toMatchObject({
      isShowingCreateProjectModal: true,
    });
  });

  it('should hide create project modal', () => {
    const store = createStore(modals);

    expect(store.getState()).toMatchObject({
      isShowingCreateProjectModal: false,
    });

    store.dispatch(showCreateProjectModal());

    expect(store.getState()).toMatchObject({
      isShowingCreateProjectModal: true,
    });

    store.dispatch(hideCreateProjectModal());

    expect(store.getState()).toMatchObject({
      isShowingCreateProjectModal: false,
    });
  });
});
