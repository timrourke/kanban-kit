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

  store.dispatch(createCard(87, 'A cool new card'));

  expect(store.getState()).toHaveLength(1);

  const newCard = store.getState()[0];
  
  expect(newCard.id).toBeDefined();
  expect(newCard.column).toBe(87);
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
      column: 54,
      order: 7,
      title: 'An existing card',
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null,
    }]
  );

  expect(store.getState()[0].id).toBe('some-id');

  store.dispatch(updateCard('some-id', 92, 3, 'A new title'));

  expect(store.getState()[0].column).toBe(92);
  expect(store.getState()[0].order).toBe(3);
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