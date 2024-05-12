import { Button } from '../interface/Button';
import { Checkbox } from '../interface/Checkbox';
import { GUIFactory } from '../interface/GUIFactory';
import { WindowsButton } from './WindowsButton';
import { WindowsCheckbox } from './WindowsCheckbox';

export class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}
