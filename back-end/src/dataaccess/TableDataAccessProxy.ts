import rethink, { Table } from 'rethinkdb';
import ConnectionInfo from './ConnectionInfo';

function getTableAndConnection(tableName: string): { table: rethink.Table, connection: rethink.Connection } {
  rethink.connect({ host: ConnectionInfo.host, port: ConnectionInfo.port }, (connectionError, connection) => {
    if (connectionError) throw connectionError;

    return {
      table: rethink.db(ConnectionInfo.database).table(tableName),
      connection
    };
  });

  throw new Error('Could not connect to database');
}

function insert(tableName: string) {
  return (value: any) => {
    const { connection, table } = getTableAndConnection(tableName);

    table.insert(value).run(connection, (error) => {
      if (error) throw error;
    });
  };

}

function getAll(tableName: string) {
  return () => {
    const { connection, table } = getTableAndConnection(tableName);
    let values = Array<any>();

    table.getAll().run(connection, async (error, getAllValues) => {
      if (error) throw error;

      values = await getAllValues.toArray();
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