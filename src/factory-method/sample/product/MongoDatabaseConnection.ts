import { DatabaseConnection } from './DatabaseConnection';

export class MongoDatabaseConnection implements DatabaseConnection {
  connect(): void {
    console.log('Connecting to a MongoDB database.');
  }

  disconnect(): void {
    console.log('Disconnecting from a MongoDB database.');
  }
}
