// Product
export class UserProfile {
  // All member fields should be optionally included in a user profile
  public name?: string;
  public age?: number;
  public phoneNumber?: string;
  public address?: string;

  getInfo(): void {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Phone: ${this.phoneNumber}, Address: ${this.address}`,
    );
  }
}
