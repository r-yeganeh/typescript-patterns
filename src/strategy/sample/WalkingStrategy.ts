import { RouteStrategy } from './RouteStrategy';

// Concrete Strategy for walking
export class WalkingStrategy implements RouteStrategy {
  calculateRoute(startPoint: string, endPoint: string): string {
    return `Calculating walking route from ${startPoint} to ${endPoint}`;
  }
}
