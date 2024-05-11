import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryService } from './repository.service';
import KnexPostRepository from './sample/repositories/KnexPostRepository';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import Post from './sample/post/post.model';
import env from '../../.constants';

describe('RepositoryService', () => {
  let service: RepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ObjectionModule.register({
          config: {
            client: 'pg',
            connection: {
              host: env.DB_HOST,
              port: env.DB_PORT,
              user: env.DB_USER,
              password: env.DB_PASSWORD,
              database: env.DB_NAME,
            },
            migrations: {
              directory: './migrations',
            },
          },
        }),
        ObjectionModule.forFeature([Post]),
      ],
      providers: [
        RepositoryService,
        { provide: 'PostRepository', useClass: KnexPostRepository },
      ],
    }).compile();

    service = module.get<RepositoryService>(RepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should query database with repository pattern', async () => {
    const result = await service.findAll();
    console.log('result: ', result);
  });
});
