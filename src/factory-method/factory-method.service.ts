import { Injectable } from '@nestjs/common';
import { DatabaseConnectionFactory } from './sample/creators/DatabaseConnectionFactory';

@Injectable()
export class FactoryMethodService {
  public clientCode(factory: DatabaseConnectionFactory) {
    factory.connectDatabase();
  }
}
