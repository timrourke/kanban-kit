import { createStore } from 'redux'

import {
  createBoard,
  updateBoard,
  deleteBoard,
} from './../actions';

import boards from './boards';

it('should create a valid store', () => {
  const store = createStore(boards);

  expect(store.getState()).toMatchObject([]);
});

it('should create a board', () => {
  const store = createStore(boards);

  expect(store.getState()).toMatchObject([]);

  store.dispatch(createBoard('some-project-id', 'A cool new board'));

  expect(store.getState()).toHaveLength(1);

  const newBoard = store.getState()[0];
  
  expect(newBoard.id).toBeDefined();
  expect(newBoard.project).toBe('some-project-id');
  expect(newBoard.title).toBe('A cool new board');
  expect(newBoard.createdAt).toBeInstanceOf(Date);
  expect(newBoard.updatedAt).toBe(null);
  expect(newBoard.deletedAt).toBe(null);
});

it('should update a board', () => {
  const store = createStore(
    boards,
    [{
      id: 'some-id',
      project: 'some-project-id',
      title: 'An existing board',
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null,
    }]
  );

  expect(store.getState()[0].id).toBe('some-id');
  expect(store.getState()[0].project).toBe('some-project-id');
  expect(store.getState()[0].title).toBe('An existing board');

  store.dispatch(updateBoard('some-id', 'some-other-project-id', 'A new title'));

  expect(store.getState()[0].project).toBe('some-other-project-id');
  expect(store.getState()[0].title).toBe('A new title');
});

it('should delete a board', () => {
  const store = createStore(boards);

  expect(store.getState()).toMatchObject([]);

  store.dispatch(createBoard('A cool new board'));

  const existingBoards = store.getState();

  expect(existingBoards).toHaveLength(1);

  store.dispatch(deleteBoard(existingBoards[0].id));

  expect(store.getState()).toHaveLength(0);
});