/**
 * We can add more repositories. Their model should be passed to RepositoryInterface
 */

/*
import { Inject } from '@nestjs/common';
import Comment from '../post/comment.model';
import RepositoryInterface from './interface/RepositoryInterface';

export default class KnexPostRepository
  implements RepositoryInterface<Comment>
{
  constructor(@Inject(Comment) private readonly commentModel: typeof Comment) {}

  async all(): Promise<Comment[]> {
    return this.commentModel.query();
  }

  async find(id: number): Promise<Comment> {
    return this.commentModel.query().where('id', id).first();
  }

  async create(data: object): Promise<Comment> {
    return this.commentModel.query().insert(data);
  }
}

*/
