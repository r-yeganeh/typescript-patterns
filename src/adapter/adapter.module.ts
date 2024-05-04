import { Module } from '@nestjs/common';
import { AdapterService } from './adapter.service';

@Module({
  providers: [AdapterService]
})
export class AdapterModule {}
