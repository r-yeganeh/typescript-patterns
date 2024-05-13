import { DatabaseConnection } from '../DatabaseConnection';

// Creator Abstract Class
export abstract class DatabaseConnectionFactory {
  abstract createConnection(): DatabaseConnection;

  connectDatabase(): void {
    const connection = this.createConnection();
    connection.connect();
    // Additional logic can be added here
    connection.disconnect();
  }
}
