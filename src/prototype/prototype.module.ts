import { Module } from '@nestjs/common';
import { PrototypeService } from './prototype.service';

@Module({
  providers: [PrototypeService]
})
export class PrototypeModule {}
