import {
  CREATE_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  createCard,
  updateCard,
  deleteCard,
} from './../actions';

const cards = (state = [], action) => {
  const { payload } = action;

  switch (action.type) {
    case CREATE_CARD:
      return [
        ...state,
        Object.assign({}, payload, {
          createdAt: new Date(),
          updatedAt: null,
          deletedAt: null,
        }),
      ];
    case UPDATE_CARD:
      return state
        .map((card) => {
          if (card.id !== payload.id) {
            return card;
          }

          return Object.assign({}, card, payload, {
            updatedAt: new Date(),
          });
        });
    case DELETE_CARD:
      return state
        .filter((card) => card.id !== payload.id);
    default:
      return state;
  }
}

export default cards;