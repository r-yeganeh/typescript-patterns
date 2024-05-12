import { Checkbox } from '../interface/Checkbox';

export class WindowsCheckbox implements Checkbox {
  paint(): void {
    console.log('Rendering a checkbox in a Windows style');
  }
}
