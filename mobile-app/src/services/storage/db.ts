import Realm from 'realm';

const db = async (schema: Realm.ObjectSchema) => {

    return await Realm.open({ schema: [schema] });

}

export default db;