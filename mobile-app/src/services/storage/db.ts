import * as SQLite from 'expo-sqlite';
export const db = SQLite.openDatabase("nospender.db");

export const initializeTransactionsTable = () => {
    
    db.transaction(tx => {
        tx.executeSql(
            `create table if not exists 'transactions'
            (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR, category INTEGER, amount REAL,
             insertTime DATETIME, longtitude REAL, latitude REAL, userId INTEGER);`)
    });

}

export const initializeUserTable = () => {
   
    db.transaction(tx => {
        tx.executeSql(
            `create table if not exists transactions 
            (id integer, name VARCHAR, category INTEGER, amount REAL,
             insertTime DATETIME, longtitude REAL, latitude REAL);`)
    });

}
