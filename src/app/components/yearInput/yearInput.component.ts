import {
  Component,
  ElementRef,
  forwardRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

import { NgClass } from '@angular/common';
import { ddownAnimation } from '../../animations/ddown.animation';
import { QwertyInput } from '../../core/qwertyInput.class';

@Component({
  selector: 'year-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YearInputComponent),
      multi: true,
    },
  ],
  templateUrl: './yearInput.template.html',
  styleUrls: ['./yearInput.style.scss'],
  animations: [ddownAnimation],
})
export class YearInputComponent extends QwertyInput implements OnInit {
  constructor() {
    super();
  }

  @ViewChild('yearInput')
  override inputEle: ElementRef<HTMLInputElement>;

  actualYear: number;

  items: any[] = [2022, 2023, 2024, 2025];

  ngOnInit(): void {
    this.sub = this.inputControl.valueChanges.subscribe((val) => {
      this.onChange(val);
    });
    var timeStamp = new Date(Date.now());
    this.actualYear = timeStamp.getFullYear();
    this.writeValue(this.actualYear);
  }
}
