import {combineReducers} from 'redux';
import ScoreReducer from './scoreReducer.js';
import ActivePage from './activeReducer.js';
const allReducers= combineReducers({
  repos: ScoreReducer,
  activeRepo: ActiveRepo
});
export default allReducers;
