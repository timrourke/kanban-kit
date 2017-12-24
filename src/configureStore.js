import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import reducers from './reducers';

/**
 * Configure the store
 *
 * @return {Redux.Store}
 */
export default () => {
  // Attempt to load persisted state from local storage
  const persistedState = loadState();

  const store = createStore(
    reducers,
    persistedState
  );

  // Persist the state on window.onunload
  window.onunload = () => saveState(store.getState());

  return store;
};
