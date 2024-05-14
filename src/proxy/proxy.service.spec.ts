import { Test, TestingModule } from '@nestjs/testing';
import { ProxyService } from './proxy.service';
import { RealUserService } from './sample/RealUserService';
import { UserServiceProxy } from './sample/UserServiceProxy';

describe('ProxyService', () => {
  let service: ProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProxyService],
    }).compile();

    service = module.get<ProxyService>(ProxyService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should demonstrate proxy pattern', () => {
    const userService = new RealUserService();
    const userServiceProxy = new UserServiceProxy(userService);

    // The first call fetches the user from the database.
    console.log(userServiceProxy.getUser(1));

    // Subsequent calls return the user from the cache.
    console.log(userServiceProxy.getUser(1));
    console.log(userServiceProxy.getUser(1));
  });
});
