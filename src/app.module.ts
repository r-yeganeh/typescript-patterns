import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SingletonService } from './singleton/singleton.service';
import { SingletonModule } from './singleton/singleton.module';
import { PrototypeModule } from './prototype/prototype.module';

@Module({
  imports: [SingletonModule, PrototypeModule],
  controllers: [AppController],
  providers: [AppService, SingletonService],
})
export class AppModule {}
