import { useDispatch } from "react-redux"
import { FETCH_TRANSACTIONS_LIST } from "../types/transactions"

import configureStore from "../store"

export const fetchTransactionList = (transactionList: any) => {
    
    console.log("fetchin transactions")
    
    configureStore.dispatch({
        type: FETCH_TRANSACTIONS_LIST,
            payload: transactionList
    })
    
}