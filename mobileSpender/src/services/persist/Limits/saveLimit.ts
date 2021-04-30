import { LimitModel } from '../../interfaces/LimitModel';
import { db } from '../../storage/db';

const saveLimit = async (limit: LimitModel) => {

    console.log('||||||||||||||||||||||||||||', limit);
    console.log({
         a:  limit.name,
         b: limit.type,
         c: limit.amount,
         d: limit.insertTime,
         e: limit.userId,
    });
    
    try {
      db.transaction((tx: { executeSql: (arg0: string, arg1: (string | number)[]) => void; }) => {
              tx.executeSql('insert into limits (name, type, amount, insertTime, userId) values (?, ?, ?, ?, ?)', [
                limit.name,
                limit.type,
                limit.amount,
                limit.insertTime,
                limit.userId,
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


export default saveLimit;
