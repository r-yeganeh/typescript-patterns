/**
 * The Singleton pattern is particularly useful in TypeScript when you want to ensure that a class
 * has only one instance while providing a global point of access to this instance.
 * Common applications of the Singleton pattern in TypeScript include managing connections to a
 * database or implementing a service that needs to maintain a state throughout the app's lifecycle.
 *
 * This Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
export class Singleton {
  private static instance: Singleton;

  private themeColor = 'red';

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public someBusinessLogic() {
    console.log('running business logic ...');
    console.log('themeColor:', this.themeColor);
    this.themeColor = 'blue';
    console.log('show:', this.themeColor, '-', Singleton.instance);
  }
}
