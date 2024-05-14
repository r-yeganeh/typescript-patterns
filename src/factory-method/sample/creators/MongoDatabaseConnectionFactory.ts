import { DatabaseConnection } from '../product/DatabaseConnection';
import { DatabaseConnectionFactory } from './DatabaseConnectionFactory';
import { MongoDatabaseConnection } from '../product/MongoDatabaseConnection';

// Concrete Creator
export class MongoDatabaseConnectionFactory extends DatabaseConnectionFactory {
  createConnection(): DatabaseConnection {
    return new MongoDatabaseConnection();
  }
}
