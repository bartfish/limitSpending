import { SQLError } from 'expo-sqlite';
import { db, initializeTransactionsTable } from '../../storage/db';

const loadTransactionList = async (userId: number) => {

    initializeTransactionsTable()
    
    try {
       
        db.transaction(tx => {
              tx.executeSql(`SELECT * FROM transactions WHERE userId = ?`, [userId]);
            },
            (error: SQLError) => {
                throw new Error(JSON.stringify(error))
            }, 
          );

    } catch (e) {
        console.error(e);
    }
}

export default loadTransactionList;