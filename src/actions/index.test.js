import * as actions from './index';

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

it('should create action for "createColumn"', () => {
  const action = actions.createColumn('some-board-id', 'foo');

  expect(action.type).toBe(actions.CREATE_COLUMN);
  expect(action.payload.id).toBeDefined();
  expect(action.payload.board).toBe('some-board-id');
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

it('should create action for "createRow"', () => {
  const action = actions.createRow('foo');

  expect(action.type).toBe(actions.CREATE_ROW);
  expect(action.payload.id).toBeDefined();
  expect(action.payload.title).toBe('foo');
});

it('should create action for "updateRow"', () => {
  const action = actions.updateRow('some-id', 'foo', 7);

  expect(action.type).toBe(actions.UPDATE_ROW);
  expect(action.payload.id).toBe('some-id');
  expect(action.payload.title).toBe('foo');
  expect(action.payload.order).toBe(7);
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