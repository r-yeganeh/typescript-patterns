import { Button } from '../interface/Button';
import { Checkbox } from '../interface/Checkbox';
import { GUIFactory } from '../interface/GUIFactory';
import { MacOSButton } from './MacOSButton';
import { MacOSCheckbox } from './MacOSCheckbox';

export class MacOSFactory implements GUIFactory {
  createButton(): Button {
    return new MacOSButton();
  }

  createCheckbox(): Checkbox {
    return new MacOSCheckbox();
  }
}
