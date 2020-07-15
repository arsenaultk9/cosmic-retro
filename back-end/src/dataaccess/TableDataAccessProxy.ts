import rethink, { Table, Connection } from 'rethinkdb';
import ConnectionInfo from './ConnectionInfo';

async function getTableAndConnection(tableName: string) {
  let connection: Connection | undefined;
  let table: Table | undefined;

  await rethink.connect({ host: ConnectionInfo.host, port: ConnectionInfo.port }, (connectionError, conn) => {
    if (connectionError) {
      console.error(`connection error ${connectionError}`);
      throw connectionError;
    }

    connection = conn;
    table = rethink.db(ConnectionInfo.database).table(tableName);
  });

  if (connection === undefined) throw new Error('Failed to connect to database');
  if (table === undefined) throw new Error('Failed to connect to table');

  return {
    table,
    connection
  };
}

function insert(tableName: string) {
  return async (value: any) => {
    const { connection, table } = await getTableAndConnection(tableName);

    table.insert(value).run(connection, (error) => {
      if (error) {
        console.error(`insert error ${error}`);
        throw error;
      }
    });
  };

}

function getAll(tableName: string) {
  return async () => {
    const { connection, table } = await getTableAndConnection(tableName);
    const values = Array<any>();

    await table.run(connection, async (error, cursor) => {
      if (error) {
        console.error(`get all error ${error}`);
        throw error;
      }

      await cursor.toArray((err, rows) => {
        rows.forEach(row => values.push(row));
      });

    });

    return values;
  };
}

const tableDataAccessProxy = (tableName: string) => {
  return {
    insert: insert(tableName),
    getAll: getAll(tableName),
  };
};

export default {
  tableDataAccessProxy
};