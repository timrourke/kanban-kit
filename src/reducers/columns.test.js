import { createStore } from 'redux'

import {
  createColumn,
  updateColumn,
  deleteColumn,
} from './../actions/columns';

import columns from './columns';

it('should create a valid store', () => {
  const store = createStore(columns);

  expect(store.getState()).toMatchObject([]);
});

it('should create a column', () => {
  const store = createStore(columns);

  expect(store.getState()).toMatchObject([]);

  store.dispatch(createColumn('some-board-id', 'A cool new column'));

  expect(store.getState()).toHaveLength(1);

  const newColumn = store.getState()[0];

  expect(newColumn.id).toBeDefined();
  expect(newColumn.board).toBe('some-board-id');
  expect(newColumn.title).toBe('A cool new column');
  expect(newColumn.createdAt).toBeInstanceOf(Date);
  expect(newColumn.updatedAt).toBe(null);
  expect(newColumn.deletedAt).toBe(null);
});

it('should update a column', () => {
  const store = createStore(
    columns,
    [{
      id: 'some-id',
      board: 'some-board-id',
      order: 4,
      title: 'An existing column',
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null,
    }]
  );

  expect(store.getState()[0].id).toBe('some-id');
  expect(store.getState()[0].board).toBe('some-board-id');
  expect(store.getState()[0].order).toBe(4);
  expect(store.getState()[0].title).toBe('An existing column');

  store.dispatch(updateColumn('some-id', 'some-other-board-id', 6, 'A new title'));

  expect(store.getState()[0].board).toBe('some-other-board-id');
  expect(store.getState()[0].order).toBe(6);
  expect(store.getState()[0].title).toBe('A new title');
});

it('should delete a column', () => {
  const store = createStore(columns);

  expect(store.getState()).toMatchObject([]);

  store.dispatch(createColumn('A cool new column'));

  const existingColumns = store.getState();

  expect(existingColumns).toHaveLength(1);

  store.dispatch(deleteColumn(existingColumns[0].id));

  expect(store.getState()).toHaveLength(0);
});
