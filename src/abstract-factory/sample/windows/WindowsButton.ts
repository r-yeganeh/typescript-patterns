import { Button } from '../interface/Button';

export class WindowsButton implements Button {
  paint(): void {
    console.log('Rendering a button in a Windows style');
  }
}
