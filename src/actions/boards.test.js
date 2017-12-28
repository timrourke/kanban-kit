import actions from './boards';

describe('actions/boards', () => {
  it('should create action for "createBoard"', () => {
    const action = actions.createBoard('some-project-id', 'foo');

    expect(action.type).toBe(actions.CREATE_BOARD);
    expect(action.payload.id).toBeDefined();
    expect(action.payload.project).toBe('some-project-id');
    expect(action.payload.title).toBe('foo');
  });

  it('should create action for "updateBoard"', () => {
    const action = actions.updateBoard('some-id', 'some-project-id', 'foo');

    expect(action.type).toBe(actions.UPDATE_BOARD);
    expect(action.payload.id).toBe('some-id');
    expect(action.payload.project).toBe('some-project-id');
    expect(action.payload.title).toBe('foo');
  });

  it('should create action for "deleteBoard"', () => {
    const action = actions.deleteBoard('some-id');

    expect(action.type).toBe(actions.DELETE_BOARD);
    expect(action.payload.id).toBe('some-id');
  });
});
