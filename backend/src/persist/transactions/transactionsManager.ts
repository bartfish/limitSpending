import { TransactionModel } from "../models/TransactionModel";
import * as Transaction from '../mschemas/TransactionSchema';

export const persistTransaction = (transaction: TransactionModel) => {

    const t = new Transaction.default({
        name: transaction.name,
        category: transaction.category,
        amount: transaction.amount,
        insertTime: transaction.insertTime,
        longtitude: transaction.longtitude,
        latitude: transaction.latitude,
        userId: transaction.userId
    }) 

    t.save(t).then(data => console.log(data))
}

export const updateTransaction = (transaction: TransactionModel) => {

    const t = new Transaction.default({
        name: transaction.name,
        category: transaction.category,
        amount: transaction.amount,
        insertTime: transaction.insertTime,
        longtitude: transaction.longtitude,
        latitude: transaction.latitude,
        userId: transaction.userId
    }) 

    t.save(t).then(data => console.log(data))
}