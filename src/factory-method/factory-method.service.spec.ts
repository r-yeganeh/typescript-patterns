import { Test, TestingModule } from '@nestjs/testing';
import { FactoryMethodService } from './factory-method.service';
import { SqlDatabaseConnectionFactory } from './sample/creators/SqlDatabaseConnectionFactory';
import { MongoDatabaseConnectionFactory } from './sample/creators/MongoDatabaseConnectionFactory';

describe('FactoryMethodService', () => {
  let service: FactoryMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactoryMethodService],
    }).compile();

    service = module.get<FactoryMethodService>(FactoryMethodService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should be defined', () => {
    const sqlFactory = new SqlDatabaseConnectionFactory();
    service.clientCode(sqlFactory);

    const mongoFactory = new MongoDatabaseConnectionFactory();
    service.clientCode(mongoFactory);
  });
});
