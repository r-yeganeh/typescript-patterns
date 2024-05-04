// Strategy interface
export interface RouteStrategy {
  calculateRoute(startPoint: string, endPoint: string): string;
}
