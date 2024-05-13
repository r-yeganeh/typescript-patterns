import { Module } from '@nestjs/common';
import { FactoryMethodService } from './factory-method.service';

@Module({
  providers: [FactoryMethodService]
})
export class FactoryMethodModule {}
