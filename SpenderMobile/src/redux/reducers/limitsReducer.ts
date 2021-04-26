import { LimitModel } from '../../services/interfaces/LimitModel';
import { FETCH_SPENDING_LIMIT } from '../types/types';

type LimitAction = {
    type: string
    payload: LimitModel[] | null
  }

const limitReducer = (state: LimitModel | null = null, action: LimitAction) => {
    switch (action.type) {
        case FETCH_SPENDING_LIMIT:
            return action.payload;
        default:
            return state;
    }
};

export default limitReducer;
