import SQLite from 'react-native-sqlite-storage';
export const db = SQLite.openDatabase('nospender.db');

export const initializeTransactionsTable = () => {
    db.transaction(tx => {
        tx.executeSql(
            `create table if not exists 'transactions'
            (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR, category INTEGER, amount REAL,
             insertTime DATETIME, longtitude REAL, latitude REAL, userId INTEGER);`);
    });
};

export const initializeUserTable = () => {
    db.transaction(tx => {
        tx.executeSql(
            `create table if not exists transactions 
            (id integer, name VARCHAR, category INTEGER, amount REAL,
             insertTime DATETIME, longtitude REAL, latitude REAL);`);
    });
};

export const clearDatabase = async () => {
    let [results] = await db.executeSql('SELECT name FROM sqlite_master WHERE type="table" ORDER BY name');
    var len = results.rows.length;
    for (let i = 0; i < len; i++) {
        let tableName = results.rows.item(i).name;
        if (tableName !== 'sqlite_sequence' && tableName !== 'android_metadata') {
            await db.executeSql(`DELETE FROM ${results.rows.item(i).name}`);
        }
    }
};
