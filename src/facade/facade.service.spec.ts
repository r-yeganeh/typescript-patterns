import { Test, TestingModule } from '@nestjs/testing';
import { FacadeService } from './facade.service';
import { OrderFacade } from './sample/OrderFacade';

describe('FacadeService', () => {
  let service: FacadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacadeService],
    }).compile();

    service = module.get<FacadeService>(FacadeService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should demonstrate facade pattern ', () => {
    const orderFacade = new OrderFacade();
    orderFacade.placeOrder('123', '321', 100);
  });
});
