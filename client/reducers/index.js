import { combineReducers } from 'redux';

// import all reducers here
import mainReducer from './mainReducer';

const reducers = combineReducers({
  plants: mainReducer,
});

export default reducers;
