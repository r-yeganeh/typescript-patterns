import { RouteStrategy } from './RouteStrategy';

// Concrete Strategy for cycling
export class CyclingStrategy implements RouteStrategy {
  calculateRoute(startPoint: string, endPoint: string): string {
    return `Calculating cycling route from ${startPoint} to ${endPoint}`;
  }
}
