import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import calculationReducer from './reducers/calculationReducer';
import notificationReducer from './reducers/notificationReducer';

const reducers = combineReducers({
  calculation: calculationReducer,
  notification: notificationReducer,
});

const store = createStore(reducers, composeWithDevTools());
export default store;
