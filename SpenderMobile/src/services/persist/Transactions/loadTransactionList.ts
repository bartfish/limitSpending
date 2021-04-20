import { setTransactionsList } from '../../../redux/actions/transactions';
import { TransactionModel } from '../../interfaces/TransactionModel';
import { db, initializeTransactionsTable } from '../../storage/db';

export const loadTransactionList = async (userId: number) => {

    try {
        console.log('userId');
        console.log(userId);

        initializeTransactionsTable();

        db.transaction(tx => {

          tx.executeSql('SELECT * FROM transactions WHERE userId = ?', [userId],
            (tx, results) => {
              var transactionList = [];
              for (let i = 0; i < results.rows.length; ++i) {
                const {
                  id,
                  name,
                  amount,
                  category,
                  latitude,
                  longtitude,
                  insertTime,
                  userId } = results.rows.item(i);

                let transaction: TransactionModel = {
                  id: id,
                  name: name,
                  amount: amount,
                  category: category,
                  latitude: latitude,
                  longtitude: longtitude,
                  insertTime: insertTime,
                  userId: userId,
                };
                transactionList.push(transaction);
              }
              console.log(transactionList)
              setTransactionsList(Object.values(transactionList));
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
};
