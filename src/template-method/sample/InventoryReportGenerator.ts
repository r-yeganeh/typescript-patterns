import { ReportGenerator } from './ReportGenerator';

// Concrete class for inventory reports
export class InventoryReportGenerator extends ReportGenerator {
  private inventoryData: any[];

  prepareData(): void {
    console.log('Preparing inventory data');
    this.inventoryData = [{ item: 'Book', quantity: '50' }]; // Dummy data
  }

  createReport(): string {
    console.log('Creating inventory report');
    return `Inventory Report: ${JSON.stringify(this.inventoryData)}`;
  }

  saveReport(report: string): void {
    console.log('Saving inventory report');
    console.log(report);
  }
}
