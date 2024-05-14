import { Button } from './Button';
import { Checkbox } from './Checkbox';

/** Abstract factory interface */
export interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
