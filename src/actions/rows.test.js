import actions from './rows';

describe('actions/rows', () => {
  it('should create action for "createRow"', () => {
    const action = actions.createRow('some-board-id', 'foo');

    expect(action.type).toBe(actions.CREATE_ROW);
    expect(action.payload.id).toBeDefined();
    expect(action.payload.board).toBe('some-board-id');
    expect(action.payload.title).toBe('foo');
  });

  it('should create action for "updateRow"', () => {
    const action = actions.updateRow('some-id', 'some-board-id', 7, 'foo');

    expect(action.type).toBe(actions.UPDATE_ROW);
    expect(action.payload.id).toBe('some-id');
    expect(action.payload.board).toBe('some-board-id');
    expect(action.payload.order).toBe(7);
    expect(action.payload.title).toBe('foo');
  });

  it('should create action for "deleteRow"', () => {
    const action = actions.deleteRow('some-id');

    expect(action.type).toBe(actions.DELETE_ROW);
    expect(action.payload.id).toBe('some-id');
  });
});
