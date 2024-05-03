import { Clonable } from './Clonable';

/**
 * 1 Prototype pattern benefit over spread syntax: deep copying (instead of shallow copying)
 *
 * A shallow copy means constructing a new collection object and then populating it with references
 * to the child objects found in the original. In essence, a shallow copy is only one level deep. The
 * copying process does not recurse and therefore won't create copies of the child objects themselves.
 */
export class ComplexVehicle implements Clonable<ComplexVehicle> {
  public engine: { horsepower: number; type: string };
  constructor(
    public model: string,
    public color: string,
    engineData: { horsepower: number; type: string },
  ) {
    this.model = this.model;
    this.color = this.color;
    this.engine = { ...engineData };
  }

  public clone(): ComplexVehicle {
    // Deep copy of the engine object
    return new ComplexVehicle(this.model, this.color, { ...this.engine });
  }
}
