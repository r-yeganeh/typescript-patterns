import { DatabaseConnection } from '../DatabaseConnection';
import { DatabaseConnectionFactory } from './DatabaseConnectionFactory';
import { SqlDatabaseConnection } from '../products/SqlDatabaseConnection';

// Concrete Creator
export class SqlDatabaseConnectionFactory extends DatabaseConnectionFactory {
  createConnection(): DatabaseConnection {
    return new SqlDatabaseConnection();
  }
}
