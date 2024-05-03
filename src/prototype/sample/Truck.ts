import { Car } from './Car';

/**
 * 1 Prototype pattern benefit over spread syntax: polymorphism
 */
export class Truck extends Car {
  constructor(
    model: string,
    doors: number,
    public payloadCapacity: number,
  ) {
    super(model, doors);
    this.payloadCapacity = payloadCapacity;
  }

  clone(): this {
    return new (this.constructor as any)(
      this.model,
      this.doors,
      this.payloadCapacity,
    );
  }
}
