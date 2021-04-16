import * as SQLite from 'expo-sqlite';
export const db = SQLite.openDatabase(`db.nospender`);

export const initializeTransactionsTable = () => {
   
    db.transaction(tx => {
        tx.executeSql(
            `create table if not exists transactions 
            (id integer, name VARCHAR, category INTEGER, amount DOUBLe,
             insertTime DATETIME, longtitude DOUBLE, latitude DOUBLE, userId INTEGER);`)
    });

}

export const initializeUserTable = () => {
   
    db.transaction(tx => {
        tx.executeSql(
            `create table if not exists transactions 
            (id integer, name VARCHAR, category INTEGER, amount DOUBLe,
             insertTime DATETIME, longtitude DOUBLE, latitude DOUBLE);`)
    });

}
