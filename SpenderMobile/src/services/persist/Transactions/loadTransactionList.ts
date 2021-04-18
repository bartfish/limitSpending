import { fetchTransactionList } from '../../../redux/actions/transactions';
import { TransactionModel } from '../../interfaces/TransactionModel';
import { db } from '../../storage/db';

export const loadTransactionList = async (userId: number) => {
   
    try {
               
        db.transaction(tx => {

          tx.executeSql(`SELECT json_object(*) FROM transactions WHERE userId = ?`, [userId],
            (tx, results) => {

              console.log(results.rows);

              var transactionList = [];
              for (let i = 0; i < results.rows.length; ++i) {
                let transaction: TransactionModel = {
                  name: results.rows.item(i).name,
                  amount: results.rows.item(i).amount,
                  category: results.rows.item(i).category,
                  latitude: results.rows.item(i).latitude,
                  longtitude: results.rows.item(i).longtitude,
                  insertTime: results.rows.item(i).insertTime,
                  userId: 5
              }
                transactionList.push(transaction);
              }

              fetchTransactionList(transactionList)
              // return results.rows;
            });
        },
        (error) => {
          throw new Error(JSON.stringify(error));
        }

      );

    } catch (e) {
        console.error(e);
        return null;
    }
}