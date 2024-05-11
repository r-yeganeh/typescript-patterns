import { Test, TestingModule } from '@nestjs/testing';
import { PrototypeService } from './prototype.service';
import { ComplexVehicle } from './sample/ComplexVehicle';
import { Car } from './sample/Car';
import { Truck } from './sample/Truck';

describe('PrototypeService', () => {
  let service: PrototypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrototypeService],
    }).compile();

    service = module.get<PrototypeService>(PrototypeService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should demonstrate problem with shallow copying', () => {
    const complexVehicle = new ComplexVehicle('101', 'red', {
      horsepower: 100,
      type: 'advanced',
    });
    const shallowCopy = { ...complexVehicle };
    expect(complexVehicle).toEqual(shallowCopy);
    shallowCopy.engine.type = 'basic';
    expect(complexVehicle.engine.type).not.toBe('advanced');
    expect(complexVehicle.engine.type).toBe(shallowCopy.engine.type);
  });

  it('should demonstrate deep copying with prototype pattern', () => {
    const complexVehicle = new ComplexVehicle('101', 'red', {
      horsepower: 100,
      type: 'advanced',
    });
    const deepCopy = complexVehicle.clone();
    expect(complexVehicle).toEqual(deepCopy);
    deepCopy.engine.type = 'basic';
    expect(complexVehicle.engine.type).toBe('advanced');
  });

  it('should demonstrate polymorphism', () => {
    const car = new Car('benz A', 4);
    const truck = new Truck('sample', 2, 300);
    const clonable1 = car.clone();
    expect(clonable1).toEqual(car);
    const clonable2 = truck.clone();
    expect(clonable2).toEqual(truck);
    const complex = new ComplexVehicle('asdas', 'dfd', {
      horsepower: 2,
      type: 'dfd',
    });
    const clone = complex.clone();
    console.log(clone);
    expect(clone).toEqual(complex);
  });
});
