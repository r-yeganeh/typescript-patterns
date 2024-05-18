import { Test, TestingModule } from '@nestjs/testing';
import { ChainService } from './chain.service';
import { JuniorSupportHandler } from './sample/JuniorSupportHandler';
import { SeniorSupportHandler } from './sample/SeniorSupportHandler';
import { ManagerSupportHandler } from './sample/ManagerSupportHandler';

describe('ChainService', () => {
  let service: ChainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChainService],
    }).compile();

    service = module.get<ChainService>(ChainService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should demonstrate chain of responsibilities', () => {
    // Building the chain
    const junior = new JuniorSupportHandler();
    const senior = junior.setNext(new SeniorSupportHandler());
    senior.setNext(new ManagerSupportHandler());

    // run requests
    const requests = ['Simple Query', 'Complex Query', 'High-Level Issue'];
    service.clientCode(requests, junior);
  });
});
