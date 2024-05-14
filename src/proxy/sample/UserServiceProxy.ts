import { RealUserService } from './RealUserService';
import { User } from './interface/User';
import { UserService } from './interface/UserService';

// Proxy
export class UserServiceProxy implements UserService {
  private cache: Record<number, User> = {};

  constructor(private userService: RealUserService) {}

  getUser(id: number): User {
    if (this.cache[id]) {
      console.log('Returning cached user...');
      return this.cache[id];
    }
    const user = this.userService.getUser(id);
    this.cache[id] = user;
    return user;
  }
}
