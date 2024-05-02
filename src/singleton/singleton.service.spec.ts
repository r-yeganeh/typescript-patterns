import { Test, TestingModule } from '@nestjs/testing';
import { SingletonService } from './singleton.service';
import { Singleton } from './sample/Singleton';

describe('SingletonService', () => {
  let service: SingletonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SingletonService],
    }).compile();

    service = module.get<SingletonService>(SingletonService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should return the same single instance of the class', () => {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();
    expect(s1).toEqual(s2);
    s1.someBusinessLogic();

    if (s1 === s2) {
      console.log('Singleton works, both variables contain the same instance.');
    } else {
      console.log('Singleton failed, variables contain different instances.');
    }
  });
});
