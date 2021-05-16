import * as express from 'express';
import { TransactionModel } from '../persist/models/TransactionModel';
import { modifyTransaction } from '../persist/transactions/transactionsManager';

const updateTransaction = async (req: express.Request, res: express.Response): Promise<any | never> => {

    const { 
        name,
        category,
        amount,
        insertTime,
        longtitude,
        latitude,
        userId } = req.body as TransactionModel;
    
    try {
        const response = await modifyTransaction("60a1a1719f2bbf37e83595c2", { name, category, amount, insertTime, longtitude, latitude, userId })
        console.log(response)
        if (response) {
            return res.status(200).send();
        }

    } catch (exception) {
        return res.status(500).send({ errorMessage: exception });
    }
}

const updateTransactionRoute: express.Route = express.Router();
updateTransactionRoute.patch('/updateTransaction', updateTransaction);
export { updateTransactionRoute };