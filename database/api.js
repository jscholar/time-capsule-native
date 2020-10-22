import connection from './connection';

/* ____ FOR DEVELOPMENT PURPOSES ___ */
export const dropTable = (callback) => {
  connection.transaction(
    (transaction) => {
      transaction.executeSql('DROP TABLE entries', [], () => {
        console.log('Dropped table');
      });
    },
    (err) => console.log(err),
    () => callback(),
  );
};

export const initTable = () => {
  connection.transaction(
    (transaction) => {
      transaction.executeSql(`
        CREATE TABLE IF NOT EXISTS "entries" (
          id text PRIMARY KEY,
          date text NOT NULL,
          description text,
          message text,
          status text
        )
      `);
    },
    console.log, // Error Callback
    () => console.log('Init Table success'),
  );
};

export const getEntry = () => {

};
