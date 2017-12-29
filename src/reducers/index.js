import { combineReducers } from 'redux';

import boards   from './boards';
import cards    from './cards';
import columns  from './columns';
import modals   from './modals';
import projects from './projects';
import rows     from './rows';

const reducers = combineReducers({
  boards,
  cards,
  columns,
  modals,
  projects,
  rows
});

export default reducers;
