// Product Interface
export interface DatabaseConnection {
  connect(): void;
  disconnect(): void;
}
