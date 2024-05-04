import { Test, TestingModule } from '@nestjs/testing';
import { TemplateMethodService } from './template-method.service';
import { SalesReportGenerator } from './sample/SalesReportGenrator';
import { InventoryReportGenerator } from './sample/InventoryReportGenerator';

describe('TemplateMethodService', () => {
  let service: TemplateMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemplateMethodService],
    }).compile();

    service = module.get<TemplateMethodService>(TemplateMethodService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should demonstrate template method', () => {
    const salesReport = new SalesReportGenerator();
    salesReport.generateReport();

    const inventoryReport = new InventoryReportGenerator();
    inventoryReport.generateReport();
  });
});
