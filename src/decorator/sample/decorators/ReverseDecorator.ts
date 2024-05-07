import { DataSourceDecorator } from './DataSourceDecorator';

// Concrete Decorator
export class ReverseDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    const reversedData = data.split('').reverse().join('');
    console.log(`[ReverseDecorator] Reversed data: ${reversedData}`);
    super.writeData(reversedData);
  }

  readData(): string {
    const reversedData = super.readData();
    const data = reversedData.split('').reverse().join('');
    console.log(`[ReverseDecorator] Unreversed data: ${data}`);
    return data;
  }
}
