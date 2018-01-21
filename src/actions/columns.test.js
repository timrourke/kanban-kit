import actions from './columns';

describe('actions/columns', () => {
  it('should create action for "createColumn"', () => {
    const action = actions.createColumn('some-board-id', 3, 'foo');

    expect(action.type).toBe(actions.CREATE_COLUMN);
    expect(action.payload.id).toBeDefined();
    expect(action.payload.board).toBe('some-board-id');
    expect(action.payload.order).toBe(3);
    expect(action.payload.title).toBe('foo');
  });

  it('should create action for "updateColumn"', () => {
    const action = actions.updateColumn('some-id', 'some-board-id', 7, 'foo');

    expect(action.type).toBe(actions.UPDATE_COLUMN);
    expect(action.payload.id).toBe('some-id');
    expect(action.payload.board).toBe('some-board-id');
    expect(action.payload.order).toBe(7);
    expect(action.payload.title).toBe('foo');
  });

  it('should create action for "deleteColumn"', () => {
    const action = actions.deleteColumn('some-id');

    expect(action.type).toBe(actions.DELETE_COLUMN);
    expect(action.payload.id).toBe('some-id');
  });
});
