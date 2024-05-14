import { User } from './User';

export interface UserService {
  getUser(id: number): User;
}
