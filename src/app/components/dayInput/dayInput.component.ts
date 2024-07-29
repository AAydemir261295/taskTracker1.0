import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ddownAnimation } from '../../animations/ddown.animation';
import { QwertyInput } from '../../core/qwertyInput.class';

@Component({
  selector: 'day-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DayInputComponent),
      multi: true,
    },
  ],
  templateUrl: './dayInput.template.html',
  styleUrls: ['./dayInput.style.scss'],
  animations: [ddownAnimation],
})
export class DayInputComponent extends QwertyInput implements OnInit {
  constructor() {
    super();
  }

  @ViewChild('dayInput')
  override inputEle: ElementRef<HTMLInputElement>;

  items: number[] = [];

  currentYear: number;
  currentMonth: number;

  today: number;

  setDays(currentMonth, currentYear): void {
    this.currentMonth = currentMonth;
    this.currentYear = currentYear;
    var maxDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    var day = 1;
    var tmp = [];
    for (let q = 0; q < maxDay; q++) {
      tmp.push(day);
      day++;
    }
    this.items = tmp;
  }

  ngOnInit(): void {
    this.sub = this.inputControl.valueChanges.subscribe((val) => {
      this.onChange(val);
    });
    var timeStamp = new Date(Date.now());
    var month = timeStamp.getMonth();
    var year = timeStamp.getFullYear();
    this.today = timeStamp.getDate();

    this.setDays(month, year);
    this.writeValue(this.today);
  }
}
