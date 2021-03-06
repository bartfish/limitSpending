import { TransactionModel } from '../../interfaces/TransactionModel';

const validateTransaction = async (transaction: TransactionModel) => {
    try {

        if (!transaction.name) {throw new Error('Transaction name missing!');}
        if (transaction.amount <= 0) {throw new Error('Incorrect amount given!');}
        if (!transaction.category) {throw new Error('Category must be set.');}
        if (!transaction.userId) {throw new Error('User must be assigned');}

        return transaction;

    } catch (e) {
        console.error(e);
        return null;
    }
};

export default validateTransaction;
