import { Injectable } from '@nestjs/common';
import { GUIFactory } from './sample/interface/GUIFactory';
import { Button } from './sample/interface/Button';
import { Checkbox } from './sample/interface/Checkbox';

@Injectable()
export class AbstractFactoryService {
  public application(factory: GUIFactory) {
    const button: Button = factory.createButton();
    const checkbox: Checkbox = factory.createCheckbox();
    button.paint();
    checkbox.paint();
  }
}
