import { AbstractHandler } from './AbstractHandler';

export class ManagerSupportHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'High-Level Issue') {
      return `Manager: I will handle the ${request}.`;
    }
    return super.handle(request);
  }
}
