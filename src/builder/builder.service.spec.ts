import { Test, TestingModule } from '@nestjs/testing';
import { BuilderService } from './builder.service';
import { UserProfileBuilder } from './sample/UserProfileBuilder';
import { UserDirector } from './sample/UserDirector';

describe('BuilderService', () => {
  let service: BuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuilderService],
    }).compile();

    service = module.get<BuilderService>(BuilderService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should demonstrate builder pattern', () => {
    const userBuilder = new UserProfileBuilder();
    const user = userBuilder
      .setName('Alice')
      .setAge(25)
      .setAddress('4321 Maple Avenue')
      .build();
    user.getInfo();

    const directedUser = UserDirector.construct();
    directedUser.getInfo();
  });
});
