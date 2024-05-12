import { AbstractHandler } from './AbstractHandler';

export class SeniorSupportHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'Complex Query') {
      return `Senior Support: I can handle the ${request}.`;
    }
    return super.handle(request);
  }
}
