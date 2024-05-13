import { RemoteControl } from './RemoteControl';

// Refined Abstraction
export class AdvancedRemoteControl extends RemoteControl {
  volumeUp(): void {
    let vol = this.device.getVolume();
    this.device.setVolume(vol + 10);
  }

  volumeDown(): void {
    let vol = this.device.getVolume();
    this.device.setVolume(vol - 10);
  }
}
