import { Directive, HostListener, Input } from '@angular/core';
import { QwertyInput } from '../core/qwertyInput.class';

@Directive({
  standalone: true,
  selector: '[dropDown]',
})
export class DropDownDirective {
  @Input()
  dropDown: QwertyInput;

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
