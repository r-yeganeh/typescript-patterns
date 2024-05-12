import { Button } from '../interface/Button';

export class MacOSButton implements Button {
  paint(): void {
    console.log('Rendering a button in a MacOS style');
  }
}
