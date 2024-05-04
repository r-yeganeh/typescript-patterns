import { Graphic } from './Graphic';

// Composite
export class CompositeGraphic implements Graphic {
  private children: Graphic[] = [];

  add(child: Graphic): void {
    this.children.push(child);
  }

  remove(child: Graphic): void {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  draw(): void {
    console.log('Composite Graphic: ');
    for (let child of this.children) {
      child.draw();
    }
  }

  move(x: number, y: number): void {
    for (let child of this.children) {
      child.move(x, y);
    }
  }
}
