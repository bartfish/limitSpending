import { setLimit } from '../../../redux/actions/limits';
import { db } from '../../storage/db';

export const loadLimit = async (userIdTaken: number) => {

    try {

        db.transaction((tx: { executeSql: (arg0: string, arg1: number[], arg2: (_tx: any, results: any) => void) => void; }) => {
          tx.executeSql('SELECT * FROM limits WHERE userId = ? LIMIT 1', [userIdTaken],
            (_tx: any, results) => {
              console.log('======>', results);
              const {
                id,
                name,
                type,
                amount,
                insertTime,
                userId } = results;

                setLimit({
                id: id,
                name: name,
                type: type,
                amount: amount,
                insertTime: insertTime,
                userId: userId,
              });
            });
        },
        (error: any) => {
          throw new Error(JSON.stringify(error));
        }

      );

    } catch (e) {
        console.error(e);
        return null;
    }
};
