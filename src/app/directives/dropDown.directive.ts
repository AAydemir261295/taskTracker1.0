import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';
import { DayInputComponent } from '../components/dayInput/dayInput.component';
import { DateInput } from '../core/dateInput.class';

@Directive({
  standalone: true,
  selector: '[dropDown]',
})
export class DropDownDirective {
  @Input()
  dropDown: DateInput;

  constructor() {}

  @HostListener('document:click', ['$event'])
  public click(event: Event) {
    var target = event.target;
    if (target != this.dropDown.inputEle.nativeElement) {
      this.dropDown.hide();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent): void {
    this.dropDown.hide();
  }
}
