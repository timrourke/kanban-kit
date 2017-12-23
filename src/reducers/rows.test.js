import { createStore } from 'redux'

import {
  createRow,
  updateRow,
  deleteRow,
} from './../actions';

import rows from './rows';

it('should create a valid store', () => {
  const store = createStore(rows);

  expect(store.getState()).toMatchObject([]);
});

it('should create a row', () => {
  const store = createStore(rows);

  expect(store.getState()).toMatchObject([]);

  store.dispatch(createRow('some-board-id', 'A cool new row'));

  expect(store.getState()).toHaveLength(1);

  const newRow = store.getState()[0];
  
  expect(newRow.id).toBeDefined();
  expect(newRow.board).toBe('some-board-id');
  expect(newRow.title).toBe('A cool new row');
  expect(newRow.createdAt).toBeInstanceOf(Date);
  expect(newRow.updatedAt).toBe(null);
  expect(newRow.deletedAt).toBe(null);
});

it('should update a row', () => {
  const store = createStore(
    rows,
    [{
      id: 'some-id',
      board: 'some-board-id',
      order: 4,
      title: 'An existing row',
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null,
    }]
  );

  expect(store.getState()[0].id).toBe('some-id');
  expect(store.getState()[0].board).toBe('some-board-id');
  expect(store.getState()[0].order).toBe(4);
  expect(store.getState()[0].title).toBe('An existing row');

  store.dispatch(updateRow('some-id', 'some-other-board-id', 6, 'A new title'));

  expect(store.getState()[0].board).toBe('some-other-board-id');
  expect(store.getState()[0].order).toBe(6);
  expect(store.getState()[0].title).toBe('A new title');
});

it('should delete a row', () => {
  const store = createStore(rows);

  expect(store.getState()).toMatchObject([]);

  store.dispatch(createRow('A cool new row'));

  const existingRows = store.getState();

  expect(existingRows).toHaveLength(1);

  store.dispatch(deleteRow(existingRows[0].id));

  expect(store.getState()).toHaveLength(0);
});