import * as actions from './index';

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

it('should create action for "createCard"', () => {
  const action = actions.createCard('some-column-id', 'some-row-id', 'foo');

  expect(action.type).toBe(actions.CREATE_CARD);
  expect(action.payload.id).toBeDefined();
  expect(action.payload.column).toBe('some-column-id');
  expect(action.payload.row).toBe('some-row-id');
  expect(action.payload.title).toBe('foo');
});

it('should create action for "updateCard"', () => {
  const action = actions.updateCard('some-id', 'some-column-id', 7, 'foo');

  expect(action.type).toBe(actions.UPDATE_CARD);
  expect(action.payload.id).toBe('some-id');
  expect(action.payload.column).toBe('some-column-id');
  expect(action.payload.order).toBe(7);
  expect(action.payload.title).toBe('foo');
});

it('should create action for "deleteCard"', () => {
  const action = actions.deleteCard('some-id');

  expect(action.type).toBe(actions.DELETE_CARD);
  expect(action.payload.id).toBe('some-id');
});
