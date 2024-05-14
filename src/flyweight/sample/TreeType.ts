// Flyweight class
export class TreeType {
  constructor(
    public name: string,
    public color: string,
    public texture: string,
  ) {}

  draw(canvas: CanvasRenderingContext2D, x: number, y: number) {
    console.log(
      `Drawing a ${this.color} tree of type ${this.name} at (${x}, ${y})`,
    );
    // Drawing logic using canvas
  }
}
