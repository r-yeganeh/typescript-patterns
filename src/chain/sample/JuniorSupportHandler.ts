import { AbstractHandler } from './AbstractHandler';

export class JuniorSupportHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'Simple Query') {
      return `Junior Support: I can handle the ${request}.`;
    }
    return super.handle(request);
  }
}
