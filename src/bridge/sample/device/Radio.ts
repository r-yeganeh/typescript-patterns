import { Device } from './Device';

// Concrete Implementation for Radio
export class Radio implements Device {
  private on: boolean = false;
  private volume: number = 20;

  isEnabled(): boolean {
    return this.on;
  }

  enable(): void {
    this.on = true;
  }

  disable(): void {
    this.on = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percent: number): void {
    this.volume = percent;
  }
}
