import { LimitModel } from '../../services/interfaces/LimitModel';
import { FETCH_SPENDING_LIMIT } from '../types/types';

const initialState = {
    limit: null,
};

type LimitAction = {
    type: string
    payload: LimitModel[] | null
  }

const limitReducer = (state = initialState, action: LimitAction) => {
    switch (action.type) {
        case FETCH_SPENDING_LIMIT:
            console.log('pppppppppppppppp', action.payload)
            return action.payload;
        default:
            return state;
    }
};

export default limitReducer;
