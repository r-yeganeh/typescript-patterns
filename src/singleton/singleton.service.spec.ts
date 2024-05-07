import { Test, TestingModule } from '@nestjs/testing';
import { SingletonService } from './singleton.service';
import { Singleton } from './sample1/Singleton';

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
    expect(s1).toEqual(s2); //Singleton works, both variables contain the same instance.
    expect(s1 === s2).toBeTruthy();
    console.log(s2.someBusinessLogic());
  });
});
