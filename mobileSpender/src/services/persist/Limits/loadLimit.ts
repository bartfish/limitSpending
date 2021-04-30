import { setLimit } from '../../../redux/actions/limits';
import { db } from '../../storage/db';

export const loadLimit = async (userIdTaken: number) => {
    try {
        db.transaction((tx: { executeSql: (arg0: string, arg1: number[], arg2: (_tx: any, results: any) => void) => void; }) => {
          tx.executeSql('SELECT name, type, amount, insertTime, userId FROM limits WHERE userId = ? ORDER BY insertTime DESC', [userIdTaken],
            (_tx: any, results) => {
              if (results.rows.length > 0) {
                const {
                  id,
                  name,
                  type,
                  amount,
                  insertTime,
                  userId } =  results.rows.item(0);

                  setLimit({
                  id: id,
                  name: name,
                  type: type,
                  amount: amount,
                  insertTime: insertTime,
                  userId: userId,
                });
              }
            });
        },
        (error: any) => {
          console.log("ERROR", error);
          throw new Error(JSON.stringify(error));
        }
      );
    } catch (e) {
        console.error(e);
        return null;
    }
};
