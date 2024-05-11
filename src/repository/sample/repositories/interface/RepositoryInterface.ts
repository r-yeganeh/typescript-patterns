import Post from '../../post/post.model';

export default interface RepositoryInterface<T> {
  all(): Promise<T[]>;
  find(id: number): Promise<T>;
  create(data: object): Promise<T>;
}
