// Concrete implementation of the modern logger
export class ConcreteModernLogger implements ModernLogger {
  log(message: string): string {
    console.log(`Log: ${message}`);

    return message;
  }
}
