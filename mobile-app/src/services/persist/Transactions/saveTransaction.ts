import { TransactionModel } from '../../interfaces/TransactionModel';
import TransactionSchema from '../../schemas/transactionSchema';
import db from '../../storage/db';

const saveTransaction = async (transaction: TransactionModel) => {

    try {
        const transactionsContext = await db(TransactionSchema);
        transactionsContext.write(() => {
            transactionsContext.create('Transaction', transaction);
        });
        console.log("transaction successfully added")
    } catch (e) {
        console.error(e);
    }

}

export default saveTransaction;