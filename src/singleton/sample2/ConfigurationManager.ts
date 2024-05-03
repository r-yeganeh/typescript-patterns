class ConfigurationManager {
  private static instance: ConfigurationManager;
  private settings: Record<string, any> = {};

  private constructor() {
    // Initialize with default settings
    this.settings = {
      darkMode: false,
      language: 'English',
    };
  }

  public static getInstance(): ConfigurationManager {
    if (!ConfigurationManager.instance) {
      ConfigurationManager.instance = new ConfigurationManager();
    }
    return ConfigurationManager.instance;
  }

  public getSetting(key: string): any {
    return this.settings[key];
  }

  public setSetting(key: string, value: any): void {
    this.settings[key] = value;
  }
}
