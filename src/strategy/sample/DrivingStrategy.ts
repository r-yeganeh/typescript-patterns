import { RouteStrategy } from './RouteStrategy';

// Concrete Strategy for driving
export class DrivingStrategy implements RouteStrategy {
  calculateRoute(startPoint: string, endPoint: string): string {
    return `Calculating driving route from ${startPoint} to ${endPoint}`;
  }
}
