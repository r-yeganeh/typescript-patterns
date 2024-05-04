import { DataSourceDecorator } from './DataSourceDecorator';

export class UppercaseDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    const uppercaseData = data.toUpperCase();
    console.log(`[UppercaseDecorator] uppercase data: ${uppercaseData}`);
    super.writeData(uppercaseData);
  }

  readData(): string {
    return super.readData();
  }
}
