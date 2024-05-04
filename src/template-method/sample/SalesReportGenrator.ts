import { ReportGenerator } from './ReportGenerator';

// Concrete class for sales reports
export class SalesReportGenerator extends ReportGenerator {
  private data: any[];

  prepareData(): void {
    console.log('Preparing sales data');
    this.data = [{ sale: '100', item: 'Book' }]; // Dummy data
  }

  createReport(): string {
    console.log('Creating sales report');
    return `Sales Report: ${JSON.stringify(this.data)}`;
  }

  saveReport(report: string): void {
    console.log('Saving sales report');
    console.log(report);
  }
}
