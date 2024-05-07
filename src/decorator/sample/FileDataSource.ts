import { DataSource } from './DataSource';

//Concrete Component - A basic implementation of the component interface.
export class FileDataSource implements DataSource {
  private fileName: string;
  private data: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  writeData(data: string): void {
    console.log(
      `[FileDataSource] Writing to file: ${this.fileName}, data: ${data}`,
    );
    this.data = data;
  }

  readData(): string {
    console.log(
      `[FileDataSource] Reading from file: ${this.fileName}, data: ${this.data}`,
    );
    return this.data;
  }
}
