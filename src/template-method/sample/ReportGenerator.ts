// Abstract class with the template method
export abstract class ReportGenerator {
  // Template method defines the sequence of steps
  generateReport(): void {
    this.prepareData();
    const report = this.createReport();
    this.saveReport(report);
  }

  abstract prepareData(): void; // Prepare data specific to the report
  abstract createReport(): string; // Create the report content
  abstract saveReport(report: string): void; // Save or send the report

  // Additional helper methods can be included here
}
