import * as SQLite from 'expo-sqlite';

const connection = SQLite.openDatabase('time_capsule');

export default connection;
