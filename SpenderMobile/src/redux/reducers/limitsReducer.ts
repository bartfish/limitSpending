import { LimitModel } from '../../services/interfaces/LimitModel';
import { FETCH_SPENDING_LIMIT } from '../types/types';

const initialState = {
    limit: null,
};

type LimitAction = {
    type: string
    payload: LimitModel[] | null
  }

const transactionsReducer = (state = initialState, action: LimitAction) => {
    switch (action.type) {
        case FETCH_SPENDING_LIMIT:
            return action.payload;
        default:
            return state;
    }
};

export default transactionsReducer;
