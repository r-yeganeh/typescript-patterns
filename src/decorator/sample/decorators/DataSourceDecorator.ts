import { DataSource } from '../DataSource';

// Base Decorator: defines an interface that conforms to the component's interface.
export class DataSourceDecorator implements DataSource {
  protected source: DataSource; // Maintains a reference to a component object

  constructor(source: DataSource) {
    this.source = source;
  }

  writeData(data: string): void {
    this.source.writeData(data);
  }

  readData(): string {
    return this.source.readData();
  }
}
