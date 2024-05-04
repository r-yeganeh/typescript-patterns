import { Test, TestingModule } from '@nestjs/testing';
import { StrategyService } from './strategy.service';
import { RoutePlanner } from './sample/RoutePlanner';
import { DrivingStrategy } from './sample/DrivingStrategy';
import { CyclingStrategy } from './sample/CyclingStrategy';
import { WalkingStrategy } from './sample/WalkingStrategy';

describe('StrategyService', () => {
  let service: StrategyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrategyService],
    }).compile();

    service = module.get<StrategyService>(StrategyService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should demonstrate strategy pattern', () => {
    const routePlanner = new RoutePlanner(new DrivingStrategy());
    routePlanner.calculateRoute('1st Street', '2nd Street');

    routePlanner.setStrategy(new CyclingStrategy());
    routePlanner.calculateRoute('1st Street', '2nd Street');

    routePlanner.setStrategy(new WalkingStrategy());
    routePlanner.calculateRoute('1st Street', '2nd Street');
  });
});
