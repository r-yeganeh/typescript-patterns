import { Module } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import Post from './sample/post/post.model';
import KnexPostRepository from './sample/repositories/KnexPostRepository';

@Module({
  imports: [ObjectionModule.forFeature([Post])],
  providers: [
    RepositoryService,
    { provide: 'PostRepository', useClass: KnexPostRepository },
    //{ provide: 'PostRepository', useClass: PrismaPostRepository },
  ],
})
export class RepositoryModule {}
