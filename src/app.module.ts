import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SingletonService } from './singleton/singleton.service';
import { SingletonModule } from './singleton/singleton.module';

@Module({
  imports: [SingletonModule],
  controllers: [AppController],
  providers: [AppService, SingletonService],
})
export class AppModule {}
