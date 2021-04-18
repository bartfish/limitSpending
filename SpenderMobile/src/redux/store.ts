import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import transactionsReducer from "./reducers/transactionsReducer";

const rootReducer = combineReducers({
    transactions: transactionsReducer
})

const configureStore = createStore(rootReducer, applyMiddleware(thunk))

export default configureStore