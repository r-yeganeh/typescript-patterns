import { Test, TestingModule } from '@nestjs/testing';
import { CompositeService } from './composite.service';
import { Circle } from './sample/Circle';
import { CompositeGraphic } from './sample/CompositeGraphic';

describe('CompositeService', () => {
  let service: CompositeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompositeService],
    }).compile();

    service = module.get<CompositeService>(CompositeService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should demonstrate composite pattern', () => {
    const circle1 = new Circle(1, 2, 3);
    const circle2 = new Circle(5, 6, 7);
    const composite = new CompositeGraphic();

    composite.add(circle1);
    composite.add(circle2);

    composite.draw();
    composite.move(3, 3);
  });
});
