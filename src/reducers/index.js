import { combineReducers } from 'redux';

import boards   from './boards';
import cards    from './cards';
import columns  from './columns';
import projects from './projects';
import rows     from './rows';

const reducers = combineReducers({
  boards,
  cards,
  columns,
  projects,
  rows
});

export default reducers;
