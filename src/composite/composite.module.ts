import { Module } from '@nestjs/common';
import { CompositeService } from './composite.service';

@Module({
  providers: [CompositeService]
})
export class CompositeModule {}
