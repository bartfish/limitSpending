import { FETCH_TRANSACTIONS_LIST } from '../types/types';

import configureStore from '../store';

export const setTransactionsList = (transactionList: any) => {
    configureStore.dispatch({
        type: FETCH_TRANSACTIONS_LIST,
            payload: transactionList,
    });
};

