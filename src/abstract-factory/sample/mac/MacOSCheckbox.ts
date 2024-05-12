import { Checkbox } from '../interface/Checkbox';

export class MacOSCheckbox implements Checkbox {
  paint(): void {
    console.log('Rendering a checkbox in a MacOS style');
  }
}
