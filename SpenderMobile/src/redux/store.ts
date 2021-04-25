import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import limitsReducer from './reducers/transactionsReducer';
import transactionsReducer from './reducers/transactionsReducer';

const rootReducer = combineReducers({
    transactions: transactionsReducer,
    limits: limitsReducer,
});

const configureStore = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
