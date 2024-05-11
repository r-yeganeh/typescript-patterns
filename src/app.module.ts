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
import { TemplateMethodModule } from './template-method/template-method.module';
import { StrategyModule } from './strategy/strategy.module';
import { RepositoryModule } from './repository/repository.module';
import { ObjectionModule } from '@willsoto/nestjs-objection';

@Module({
  imports: [
    SingletonModule,
    PrototypeModule,
    AdapterModule,
    DecoratorModule,
    CompositeModule,
    FacadeModule,
    TemplateMethodModule,
    StrategyModule,
    RepositoryModule,
    ObjectionModule.register({
      config: {
        client: 'pg',
        useNullAsDefault: true,
        connection: {
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, SingletonService, FacadeService],
})
export class AppModule {}
