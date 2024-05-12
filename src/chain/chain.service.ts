import { Injectable } from '@nestjs/common';
import { Handler } from './sample/Handler';

@Injectable()
export class ChainService {
  public clientCode(requests: string[], handler: Handler) {
    for (const request of requests) {
      const result = handler.handle(request);
      if (result) {
        console.log(`Request (${request}) handled by: ${result}`);
      } else {
        console.log(`Request (${request}) was left unhandled.`);
      }
    }
  }
}
