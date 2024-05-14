import { DatabaseConnection } from '../product/DatabaseConnection';
import { DatabaseConnectionFactory } from './DatabaseConnectionFactory';
import { SqlDatabaseConnection } from '../product/SqlDatabaseConnection';

// Concrete Creator
export class SqlDatabaseConnectionFactory extends DatabaseConnectionFactory {
  createConnection(): DatabaseConnection {
    return new SqlDatabaseConnection();
  }
}
