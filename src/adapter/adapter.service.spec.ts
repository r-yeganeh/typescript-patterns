import { Test, TestingModule } from '@nestjs/testing';
import { AdapterService } from './adapter.service';
import { ConcreteModernLogger } from './sample/ConcreteModernLogger';
import { LoggerAdapter } from './sample/LoggerAdapter';

describe('AdapterService', () => {
  let service: AdapterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdapterService],
    }).compile();

    service = module.get<AdapterService>(AdapterService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should convert 2 incompatible interfaces to each other', () => {
    const modernLogger = new ConcreteModernLogger();
    const adaptedLogger = new LoggerAdapter(modernLogger);

    const severity = 2;
    const out = adaptedLogger.log('An error occurred', severity);
    expect(out.includes(severity.toString())).toBeTruthy();
  });
});
