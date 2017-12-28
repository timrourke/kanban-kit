import actions from './projects';

describe('actions/projects', () => {
  it('should create action for "createProject"', () => {
    const action = actions.createProject('foo');

    expect(action.type).toBe(actions.CREATE_PROJECT);
    expect(action.payload.id).toBeDefined();
    expect(action.payload.title).toBe('foo');
  });

  it('should create action for "updateProject"', () => {
    const action = actions.updateProject('some-id', 'foo');

    expect(action.type).toBe(actions.UPDATE_PROJECT);
    expect(action.payload.id).toBe('some-id');
    expect(action.payload.title).toBe('foo');
  });

  it('should create action for "deleteProject"', () => {
    const action = actions.deleteProject('some-id');

    expect(action.type).toBe(actions.DELETE_PROJECT);
    expect(action.payload.id).toBe('some-id');
  });
});
