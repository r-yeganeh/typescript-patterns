// Adapter that makes the modern logger compatible with the legacy logger
export class LoggerAdapter implements LegacyLogger {
  private modernLogger: ModernLogger;

  constructor(modernLogger: ModernLogger) {
    this.modernLogger = modernLogger;
  }

  log(message: string, severity: number): string {
    // Adapter logic to convert the method call
    const formattedMessage = `${message} - Severity: ${severity}`;
    this.modernLogger.log(formattedMessage);

    return formattedMessage;
  }
}
