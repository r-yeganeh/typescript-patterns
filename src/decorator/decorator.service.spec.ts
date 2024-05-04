import { Test, TestingModule } from '@nestjs/testing';
import { DecoratorService } from './decorator.service';
import { FileDataSource } from './sample/FileDataSource';
import { EncryptionDecorator } from './sample/EncryptionDecorator';
import { ReverseDecorator } from './sample/ReverseDecorator';
import { UppercaseDecorator } from './sample/UppercaseDecorator';

describe('DecoratorService', () => {
  let service: DecoratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DecoratorService],
    }).compile();

    service = module.get<DecoratorService>(DecoratorService);
  });

  //it('should be defined', () => {
  //expect(service).toBeDefined();
  //});

  it('should add functionality with decorators', () => {
    const file = new FileDataSource('sample-file');
    const reversedEncryptedFileThatDoesntWriteLowercase =
      new UppercaseDecorator(
        new ReverseDecorator(new EncryptionDecorator(file)),
      );
    const data = 'Hello world!';
    reversedEncryptedFileThatDoesntWriteLowercase.writeData(data);
    expect(reversedEncryptedFileThatDoesntWriteLowercase.readData()).toBe(
      data.toUpperCase(),
    );
  });
});
