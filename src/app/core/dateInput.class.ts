import { ElementRef } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

export abstract class DateInput implements ControlValueAccessor {
  dropDownState: boolean;
  inputEle: ElementRef<HTMLInputElement>;

  inputControl: FormControl = new FormControl();

  sub: Subscription;

  setValue(value, index?) {
    this.writeValue(value);
  }

  expand(): void {
    this.dropDownState = true;
  }

  hide(): void {
    this.dropDownState = false;
  }

  protected onChange: (value: string) => void;

  protected onTouched = () => {
    this.onChange(this.inputControl.value);
  };

  writeValue(value): void {
    this.inputControl.setValue(value, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

}
