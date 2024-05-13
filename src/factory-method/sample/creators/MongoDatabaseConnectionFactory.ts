import { DatabaseConnection } from '../DatabaseConnection';
import { DatabaseConnectionFactory } from './DatabaseConnectionFactory';
import { MongoDatabaseConnection } from '../products/MongoDatabaseConnection';

// Concrete Creator
export class MongoDatabaseConnectionFactory extends DatabaseConnectionFactory {
  createConnection(): DatabaseConnection {
    return new MongoDatabaseConnection();
  }
}
