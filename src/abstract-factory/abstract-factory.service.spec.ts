import { Test, TestingModule } from '@nestjs/testing';
import { AbstractFactoryService } from './abstract-factory.service';
import { GUIFactory } from './sample/interface/GUIFactory';
import { MacOSFactory } from './sample/mac/MacOSFactory';

describe('AbstractFactoryService', () => {
  let service: AbstractFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbstractFactoryService],
    }).compile();

    service = module.get<AbstractFactoryService>(AbstractFactoryService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should demonstrate abstract factory pattern', () => {
    const factory: GUIFactory = new MacOSFactory();
    service.application(factory);
  });
});
