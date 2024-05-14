import { TreeType } from './TreeType';

// Context class containing extrinsic state
export class Tree {
  constructor(
    public x: number,
    public y: number,
    public treeType: TreeType,
  ) {}

  draw(canvas: CanvasRenderingContext2D) {
    this.treeType.draw(canvas, this.x, this.y);
  }
}
