import { combineReducers } from 'redux';

import spinner from './spinner';
import dialog from './dialog';

const rootReducer = combineReducers({
  spinner,
  dialog,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
