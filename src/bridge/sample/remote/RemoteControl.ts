import { Device } from '../device/Device';

// Abstraction
export abstract class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  abstract volumeUp(): void;
  abstract volumeDown(): void;
}
