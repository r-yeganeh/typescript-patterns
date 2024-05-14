import { User } from './interface/User';
import { UserService } from './interface/UserService';

// Real subject
export class RealUserService implements UserService {
  getUser(id: number): User {
    console.log('Fetching user from the database...');
    // Simulate database access
    return { id, name: `User${id}` };
  }
}
