import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SingletonService } from './singleton/singleton.service';
import { SingletonModule } from './singleton/singleton.module';
import { PrototypeModule } from './prototype/prototype.module';
import { AdapterModule } from './adapter/adapter.module';
import { DecoratorModule } from './decorator/decorator.module';
import { CompositeModule } from './composite/composite.module';
import { FacadeService } from './facade/facade.service';
import { FacadeModule } from './facade/facade.module';

@Module({
  imports: [SingletonModule, PrototypeModule, AdapterModule, DecoratorModule, CompositeModule, FacadeModule],
  controllers: [AppController],
  providers: [AppService, SingletonService, FacadeService],
})
export class AppModule {}
