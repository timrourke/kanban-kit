import { createStore } from 'redux'

import {
  createCard,
  updateCard,
  deleteCard,
} from './../actions';

import cards from './cards';

it('should create a valid store', () => {
  const store = createStore(cards);

  expect(store.getState()).toMatchObject([]);
});

it('should create a card', () => {
  const store = createStore(cards);

  expect(store.getState()).toMatchObject([]);

  store.dispatch(createCard('some-column-id', 'some-row-id', 'A cool new card'));

  expect(store.getState()).toHaveLength(1);

  const newCard = store.getState()[0];
  
  expect(newCard.id).toBeDefined();
  expect(newCard.column).toBe('some-column-id');
  expect(newCard.row).toBe('some-row-id');
  expect(newCard.title).toBe('A cool new card');
  expect(newCard.createdAt).toBeInstanceOf(Date);
  expect(newCard.updatedAt).toBe(null);
  expect(newCard.deletedAt).toBe(null);
});

it('should update a card', () => {
  const store = createStore(
    cards,
    [{
      id: 'some-id',
      column: 'some-column-id',
      order: 7,
      row: 'some-row-id',
      title: 'An existing card',
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null,
    }]
  );

  expect(store.getState()[0].id).toBe('some-id');
  expect(store.getState()[0].column).toBe('some-column-id');
  expect(store.getState()[0].order).toBe(7);
  expect(store.getState()[0].title).toBe('An existing card');

  store.dispatch(updateCard('some-id', 'new-column-id', 3, 'A new title'));

  expect(store.getState()[0].column).toBe('new-column-id');
  expect(store.getState()[0].order).toBe(3);
  expect(store.getState()[0].row).toBe('some-row-id');
  expect(store.getState()[0].title).toBe('A new title');
});

it('should delete a card', () => {
  const store = createStore(cards);

  expect(store.getState()).toMatchObject([]);

  store.dispatch(createCard(87, 'A cool new card'));

  const existingCards = store.getState();

  expect(existingCards).toHaveLength(1);

  store.dispatch(deleteCard(existingCards[0].id));

  expect(store.getState()).toHaveLength(0);
});