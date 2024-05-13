import { Builder } from './Builder';
import { UserProfile } from './product';

// Concrete Builder
export class UserProfileBuilder implements Builder {
  private user: UserProfile;

  constructor() {
    this.user = new UserProfile();
  }

  setName(name: string): this {
    this.user.name = name;
    return this;
  }

  setAge(age: number): this {
    this.user.age = age;
    return this;
  }

  setPhoneNumber(phoneNumber: string): this {
    this.user.phoneNumber = phoneNumber;
    return this;
  }

  setAddress(address: string): this {
    this.user.address = address;
    return this;
  }

  build(): UserProfile {
    return this.user;
  }
}
