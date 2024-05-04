import { RouteStrategy } from './RouteStrategy';

// Context class
export class RoutePlanner {
  private strategy: RouteStrategy;

  constructor(strategy: RouteStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: RouteStrategy): void {
    this.strategy = strategy;
  }

  calculateRoute(startPoint: string, endPoint: string): void {
    console.log(this.strategy.calculateRoute(startPoint, endPoint));
  }
}
