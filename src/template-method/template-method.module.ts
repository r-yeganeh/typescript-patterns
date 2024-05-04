import { Module } from '@nestjs/common';
import { TemplateMethodService } from './template-method.service';

@Module({
  providers: [TemplateMethodService]
})
export class TemplateMethodModule {}
