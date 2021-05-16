import { TransactionModel } from "../models/TransactionModel";
import TransactionSchema, * as Transaction from '../mschemas/TransactionSchema';

export const persistTransaction = async (transaction: TransactionModel) => {

    const t = new TransactionSchema({
        name: transaction.name,
        category: transaction.category,
        amount: transaction.amount,
        insertTime: transaction.insertTime,
        longtitude: transaction.longtitude,
        latitude: transaction.latitude,
        userId: transaction.userId
    });

    try {
        return await t.save();
    } catch (error) {
        throw new Error(error)
    }
}

export const modifyTransaction = async (txId: string, transaction: TransactionModel) => {

    console.log(txId);
    // const t = new Transaction.default({
    //     name: transaction.name,
    //     category: transaction.category,
    //     amount: transaction.amount,
    //     insertTime: transaction.insertTime,
    //     longtitude: transaction.longtitude,
    //     latitude: transaction.latitude,
    //     userId: transaction.userId
    // }) 
    try {
        return await TransactionSchema
        .findOneOrUpdate({ _id: txId }, {  name: transaction.name }, { upsert: true })
    } catch (error) {
        throw new Error(error)
    }
    // return await TransactionSchema
    //     .findOneOrUpdate({ _id: txId }, {  name: transaction.name }, { upsert: true })
    //     .then(res => res)
    //     .catch((error: string) => 
    //     { 
    //         console.error(error)
    //         throw new Error(error) 
    //     });
}