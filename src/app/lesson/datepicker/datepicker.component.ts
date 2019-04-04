import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  startDate = moment(new Date(1999, 0, 1));
  minDate = moment(new Date(1999, 0, 1));
  maxDate = moment(new Date(1999, 0, 15));

  constructor() {
  }

  ngOnInit() {
  }

  familyDayFilter(date: moment.Moment): boolean {
    const day = date.day();
    return day !== 2 && day !== 5;
  }

  logDateInput($event: MatDatepickerInputEvent<moment.Moment>) {
    console.log($event.value);
  }

  logDateChange($event: MatDatepickerInputEvent<moment.Moment>) {
    console.log($event.value);
  }

}
