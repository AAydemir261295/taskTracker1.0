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
  selector: 'month-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MonthInputComponent),
      multi: true,
    },
  ],
  templateUrl: './monthInput.template.html',
  styleUrls: ['./monthInput.style.scss'],
  animations: [ddownAnimation],
})
export class MonthInputComponent extends QwertyInput implements OnInit {
  constructor() {
    super();
  }

  @ViewChild('monthInput')
  override inputEle: ElementRef<HTMLInputElement>;

  items: any[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  actualMonth: string;

  ngOnInit(): void {
    this.sub = this.inputControl.valueChanges.subscribe((val) => {
      this.onChange(val);
    });
    var timeStamp = new Date(Date.now());
    this.actualMonth = this.items[timeStamp.getMonth()];
    this.writeValue(this.actualMonth);
  }
}
