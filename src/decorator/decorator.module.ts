import { Module } from '@nestjs/common';
import { DecoratorService } from './decorator.service';

@Module({
  providers: [DecoratorService]
})
export class DecoratorModule {}
