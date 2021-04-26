import { FETCH_SPENDING_LIMIT } from '../types/types';
import configureStore from '../store';

export const setLimit = (limit) => {
    configureStore.dispatch({
        type: FETCH_SPENDING_LIMIT,
            payload: limit,
    });
};

