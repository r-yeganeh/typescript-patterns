import { Graphic } from './Graphic';

// Leaf
export class Circle implements Graphic {
  constructor(
    private x: number,
    private y: number,
    private radius: number,
  ) {}

  draw(): void {
    console.log(
      `Drawing a circle at (${this.x}, ${this.y}) with radius ${this.radius}`,
    );
  }

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
    console.log(`Moved circle to (${this.x}, ${this.y})`);
  }
}
