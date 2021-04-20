import { SQLError } from 'expo-sqlite';
import { setTransactionList } from '../../../redux/actions/transactions';
import { db } from '../../storage/db';

export const loadTransactionList = async (userId: number) => {
   
    try {
               
        db.transaction(tx => {

        tx.executeSql(`SELECT * FROM transactions WHERE userId = ?`, [userId],
          (tx, results) => {
            console.log(results.rows);
            setTransactionList(results.rows)
            // return results.rows;
          });
      },
        (error: SQLError) => {
          throw new Error(JSON.stringify(error));
        }

      );

    } catch (e) {
        console.error(e);
        return null;
    }
}