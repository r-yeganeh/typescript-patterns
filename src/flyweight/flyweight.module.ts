import { Module } from '@nestjs/common';
import { FlyweightService } from './flyweight.service';

@Module({
  providers: [FlyweightService]
})
export class FlyweightModule {}
