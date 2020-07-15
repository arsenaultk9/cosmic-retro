import rethink, { Table } from 'rethinkdb';

function getTest(tableName: string) {
  rethink.connect({ host: 'localhost', port: 28015 }, (connectionError, conn) => {
    if (connectionError) throw connectionError;

    return rethink.db('comsic-retro').table(tableName);
  });
}

function insert(value: any) {
  rethink.connect({ host: 'localhost', port: 28015 }, (connectionError, conn) => {
    if (connectionError) throw connectionError;

    return rethink.db('comsic-retro').table('').insert(value);
  });
}

export default {
  insert
};