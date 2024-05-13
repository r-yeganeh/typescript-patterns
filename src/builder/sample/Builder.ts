import { UserProfile } from './product';

// Builder interface specifies methods for creating different parts of the product objects
export interface Builder {
  setName(name: string): Builder;
  setAge(age: number): Builder;
  setPhoneNumber(phoneNumber: string): Builder;
  setAddress(address: string): Builder;
  build(): UserProfile;
}
