import { Clonable } from './Clonable';

/**
 * 1 Prototype pattern benefit over spread syntax: polymorphism
 */
export class Car implements Clonable<Car> {
  constructor(
    public model: string,
    public doors: number,
  ) {
    this.model = model;
    this.doors = doors;
  }

  clone(): this {
    return new (this.constructor as any)(this.model, this.doors);
  }
}
