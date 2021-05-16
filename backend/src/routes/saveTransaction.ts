import * as express from 'express';
import { TransactionModel } from '../persist/models/TransactionModel';
import { persistTransaction } from '../persist/transactions/transactionsManager';

const saveTransaction = async (req: express.Request, res: express.Response): Promise<any | never> => {

    console.log(req.body);

    const { 
        name,
        category,
        amount,
        insertTime,
        longtitude,
        latitude,
        userId } = req.body as TransactionModel;
    
    try {
        let response = await persistTransaction({ name, category, amount, insertTime, longtitude, latitude, userId })
        console.log(response)
        if (response) {
            return res.status(200).send();
        }

    } catch (exception) {
        return res.status(500).send({ errorMessage: exception });
    }
}

const saveTransactionRoute: express.Route = express.Router();
saveTransactionRoute.post('/saveTransaction', saveTransaction);
export { saveTransactionRoute };