/**
 * So we refactored this interface such that it can be reusable with any models.
 * and renamed it to RepositoryInterface with a generic type
 */

/*

import Post from '../post/post.model';

export default interface PostRepositoryInterface {
  all(): Promise<Post[]>;
  find(id: number): Promise<Post>;
  create(data: object): Promise<Post>;
}

*/
