import * as express from 'express';
import { persistTransaction } from '../persist/transactions/transactionsManager';
import debug from 'debug'

type TransactionPayload = {
    name: string,
    category: number,
    amount: number,
    insertTime: number,
    longtitude: number,
    latitude: number,
    userId: number
}
const log = debug('Server')

const saveTransaction = async (req: express.Request, res: express.Response): Promise<any | never> => {

    log(req);

    const { 
        name,
        category,
        amount,
        insertTime,
        longtitude,
        latitude,
        userId } = req.body as TransactionPayload;

    persistTransaction({ name, category, amount, insertTime, longtitude, latitude, userId })

}

const saveTransactionRoute: express.Route = express.Router();
saveTransactionRoute.post('/saveTransaction', saveTransaction);
export { saveTransactionRoute };