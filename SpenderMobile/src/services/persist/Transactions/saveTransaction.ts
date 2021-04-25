import { TransactionModel } from '../../interfaces/TransactionModel';
import { db } from '../../storage/db';

const saveTransaction = async (transaction: TransactionModel) => {

    try {
        db.transaction((tx: { executeSql: (arg0: string, arg1: (string | number)[]) => void; }) => {
              tx.executeSql('insert into transactions (name, category, amount, insertTime, longtitude, latitude, userId) values (?, ?, ?, ?, ?, ?, ?)', [
                transaction.name,
                transaction.category,
                transaction.amount,
                transaction.insertTime,
                transaction.longtitude,
                transaction.latitude,
                transaction.userId,
              ]);
            },
            (error: any) => {
                throw new Error(JSON.stringify(error));
            },
          );

    } catch (e) {
        console.error(e);
        return null;
    }

};


export default saveTransaction;
