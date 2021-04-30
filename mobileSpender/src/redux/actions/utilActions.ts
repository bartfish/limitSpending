import { clearDatabase } from '../../services/storage/db';

export const clearLocalDatabase = async () => {
    await clearDatabase();
};
