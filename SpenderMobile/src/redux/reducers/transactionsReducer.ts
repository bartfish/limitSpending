import { TransactionModel } from '../../services/interfaces/TransactionModel';
import { FETCH_TRANSACTIONS_LIST } from '../types/types';

const initialState = {
    transactions: null,
};

type TransactionsAction = {
    type: string
    payload: TransactionModel[] | null
  }

const limitsReducer = (state = initialState, action: TransactionsAction) => {
    switch (action.type) {
        case FETCH_TRANSACTIONS_LIST:
            return action.payload;
        default:
            return state;
    }
};

export default limitsReducer;
