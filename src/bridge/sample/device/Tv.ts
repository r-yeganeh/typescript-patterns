import { Device } from './Device';

// Concrete Implementation for TV
export class Tv implements Device {
  private on: boolean = false;
  private volume: number = 10;

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
