import { Module } from '@nestjs/common';
import { AbstractFactoryService } from './abstract-factory.service';

@Module({
  providers: [AbstractFactoryService]
})
export class AbstractFactoryModule {}
