import { Test, TestingModule } from '@nestjs/testing';
import { FlyweightService } from './flyweight.service';
import { Tree } from './sample/Tree';
import { TreeFactory } from './sample/TreeFactory';

describe('FlyweightService', () => {
  let service: FlyweightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlyweightService],
    }).compile();

    service = module.get<FlyweightService>(FlyweightService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should be defined', () => {
    // NOTE: this test cannot run without proper config
    const canvas = document.createElement('canvas').getContext('2d');
    const tree1 = new Tree(
      10,
      10,
      TreeFactory.getTreeType('Pine', 'Green', 'PineTexture'),
    );
    const tree2 = new Tree(
      20,
      10,
      TreeFactory.getTreeType('Pine', 'Green', 'PineTexture'),
    );
    const tree3 = new Tree(
      10,
      20,
      TreeFactory.getTreeType('Birch', 'White', 'BirchTexture'),
    );
    tree1.draw(canvas);
    tree2.draw(canvas);
    tree3.draw(canvas);
  });
});
