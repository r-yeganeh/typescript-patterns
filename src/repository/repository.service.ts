import { Inject, Injectable } from '@nestjs/common';
import RepositoryInterface from './sample/repositories/interface/RepositoryInterface';
import Post from './sample/post/post.model';

@Injectable()
export class RepositoryService {
  constructor(
    @Inject('PostRepository')
    private readonly postRepository: RepositoryInterface<Post>,
  ) {}

  async findAll() {
    return this.postRepository.all();
  }
}
