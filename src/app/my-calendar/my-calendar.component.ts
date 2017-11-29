import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'my-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.css']
})
export class MyCalendarComponent {

  calendarData = {
    weeks: [{
      days: [{
        isDisabled: true,
        day: 26
      }, {
        isDisabled: true,
        day: 27
      }, {
        isDisabled: true,
        day: 28
      }, {
        isDisabled: true,
        day: 29
      }, {
        isDisabled: true,
        day: 30
      }, {
        isDisabled: false,
        day: 1
      }, {
        isDisabled: true,
        day: 2
      }]
    }, {
      days: [{
        isDisabled: false,
        day: 3
      }, {
        isDisabled: false,
        day: 4
      }, {
        isDisabled: false,
        day: 5
      }, {
        isDisabled: false,
        day: 6
      }, {
        isDisabled: false,
        day: 7
      }, {
        isDisabled: false,
        day: 8
      }, {
        isDisabled: false,
        day: 9
      }]
    }]
  };

}
