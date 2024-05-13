import { UserProfileBuilder } from './UserProfileBuilder';
import { UserProfile } from './product';

/**
 * Director (optional) is only responsible for executing the building steps in a
 * particular sequence. It is helpful when producing products according to a
 * specific order or configuration
 */
export class UserDirector {
  static construct(): UserProfile {
    return new UserProfileBuilder()
      .setName('John Doe')
      .setAge(30)
      .setPhoneNumber('123-456-7890')
      .setAddress('1234 Elm Street')
      .build();
  }
}
