import TableDataAccessProxy from './TableDataAccessProxy';
import rethinkdb from 'rethinkdb';

jest.mock('rethinkdb', () => {
  return {
    connect: jest.fn(),
    db: jest.fn(),
    table: jest.fn().mockReturnValue({
      insert: jest.fn()
    }),
  };
});

describe('TableDataAccessProxy tests', () => {
  it('Can insert', () => {
    // ARRANGE
    const insertItem = { value: 'value' };

    // ACT
    TableDataAccessProxy.insert(insertItem);

    // ASSER
    expect(rethinkdb.connect).toHaveBeenCalledWith('cosmic-retro');
    // expect(rethinkdb.table().insert).toHaveBeenCalledWith(insertItem);
  });
});
