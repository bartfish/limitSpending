import { useDispatch } from "react-redux"
import { FETCH_TRANSACTIONS_LIST } from "../types/transactions"

import configureStore from "../store"

export const setTransactionList = (transactionList: any) => {
    
    console.log(transactionList)
    
    configureStore.dispatch({
        type: FETCH_TRANSACTIONS_LIST,
            payload: transactionList
    })
    
}