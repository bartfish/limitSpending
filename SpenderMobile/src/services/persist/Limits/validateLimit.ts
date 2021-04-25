import { LimitModel } from '../../interfaces/LimitModel';

const validateLimit = async (limit: LimitModel) => {
    try {

        if (!limit.name) {throw new Error('Transaction name missing!');}
        if (limit.amount <= 0) {throw new Error('Incorrect amount given!');}
        if (!limit.userId) {throw new Error('User must be assigned');}
        if (!limit.type) {throw new Error('Type must be assigned');}

        return limit;

    } catch (e) {
        console.error(e);
        return null;
    }
};

export default validateLimit;
