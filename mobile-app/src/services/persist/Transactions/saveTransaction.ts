import { SQLError } from 'expo-sqlite';
import { TransactionModel } from '../../interfaces/TransactionModel';
import { db, initializeTransactionsTable } from '../../storage/db';

const saveTransaction = async (transaction: TransactionModel) => {

    initializeTransactionsTable()
    
    try {
       
        db.transaction(tx => {
              tx.executeSql(`insert into transactions (name, category, amount, insertTime, longtitude, latitude, userId) values (0, ?, ?, ?, ?, ?, ?, ?)`, [
                transaction.name,
                transaction.category,
                transaction.amount,
                transaction.insertTime,
                transaction.longtitude,
                transaction.latitude,
                transaction.userId
              ]);
            },
            (error: SQLError) => {
                throw new Error(JSON.stringify(error))
            }, 
          );

    } catch (e) {
        console.error(e);
    }

}


export default saveTransaction;