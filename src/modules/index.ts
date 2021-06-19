import { combineReducers } from 'redux';

import spinner from './spinner';

const rootReducer = combineReducers({
  spinner,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
