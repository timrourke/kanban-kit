import actions from './modals';

describe('actions/modals', () => {
  it('should create action for "showCreateProjectModal"', () => {
    const action = actions.showCreateProjectModal();

    expect(action.type).toBe(actions.SHOW_CREATE_PROJECT_MODAL);
  });

  it('should create action for "hideCreateProjectModal"', () => {
    const action = actions.hideCreateProjectModal();

    expect(action.type).toBe(actions.HIDE_CREATE_PROJECT_MODAL);
  });
});
