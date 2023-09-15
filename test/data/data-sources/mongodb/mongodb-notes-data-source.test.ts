import MongoDbNotesDataSource from '../../../../src/data/data-sources/mongodb/mongodb-notes-data-source';
import NoSqlDatabaseWrapper from '../../../../src/data/interfaces/data-sources/no-sql-database-wrapper';

describe('MongoDb DataSource', () => {
  let mockDatabase: NoSqlDatabaseWrapper;

  beforeAll(() => {
    mockDatabase = {
      find: jest.fn(),
      findOne: jest.fn(),
      insertOne: jest.fn(),
      updateOne: jest.fn(),
      deleteOne: jest.fn(),
    };
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAll', () => {
    const db = new MongoDbNotesDataSource(mockDatabase);
  });
});