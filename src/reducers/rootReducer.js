import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { plansReducer } from './plansReducer';

export const rootReducer = combineReducers({
   ui: uiReducer,
   plans: plansReducer,
});
