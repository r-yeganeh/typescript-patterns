import { DatabaseConnection } from '../DatabaseConnection';

// Concrete Product
export class SqlDatabaseConnection implements DatabaseConnection {
  connect(): void {
    console.log('Connecting to a SQL database.');
  }

  disconnect(): void {
    console.log('Disconnecting from a SQL database.');
  }
}
