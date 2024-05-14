import { TreeType } from './TreeType';

// Factory to create or get existing Flyweight objects
export class TreeFactory {
  private static treeTypes: Map<string, TreeType> = new Map();

  static getTreeType(name: string, color: string, texture: string): TreeType {
    const key = `${name}-${color}-${texture}`;
    if (!TreeFactory.treeTypes.has(key)) {
      TreeFactory.treeTypes.set(key, new TreeType(name, color, texture));
      console.log('Creating new TreeType:', key);
    } else {
      console.log('Reusing existing TreeType:', key);
    }
    return TreeFactory.treeTypes.get(key)!;
  }
}
