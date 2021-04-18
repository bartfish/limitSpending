// import { SQLError } from 'expo-sqlite';
import { fetchTransactionList } from '../../../redux/actions/transactions';
// import { db } from '../../storage/db';

export const loadTransactionList = async (userId: number) => {
   
    try {
               
      //   db.transaction(tx => {

      //   tx.executeSql(`SELECT * FROM transactions WHERE userId = ?`, [userId],
      //     (tx, results) => {
      //       console.log(results.rows);
      //       fetchTransactionList(results.rows)
      //       // return results.rows;
      //     });
      // },
      //   (error) => {
      //     throw new Error(JSON.stringify(error));
      //   }

      // );

    } catch (e) {
        console.error(e);
        return null;
    }
}