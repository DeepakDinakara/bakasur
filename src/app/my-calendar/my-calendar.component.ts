import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'my-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.css']
})
export class MyCalendarComponent {

  lastDaySelected: number;
  Arr: Array<number>;

  calendarData = {
    weeks: [{
      days: [{
        day: 26
      }, {
        day: 27,
        rating: [1, 2, 3],
        backgroundImageUrl: 'http://english.mathrubhumi.com/polopoly_fs/1.1818744.1490269339!/image/image.jpg_gen/derivatives/landscape_822/image.jpg',
        backgroundSize: '175px'
      }, {
        day: 28,
        backgroundImageUrl: "https://i1.wp.com/feastingathome.com/wp-content/uploads/2012/03/Lemon-dill-soup-9259.jpg",
        backgroundSize: '175px'
      }, {
        day: 29,
        rating: [1, 2, 3, 4],
        isWarning1: true,
        backgroundImageUrl: 'https://www.archanaskitchen.com//images/archanaskitchen/World_Asian/Vegetable_Manchow_Soup.jpg',
        backgroundSize: '175px'
      }, {
        day: 30,
        isWarning2: true
      }, {
        day: 1,
        isCurrentMonth: true,
        isRostered: true
      }, {
        day: 2
      }]
    }, {
      days: [{
        day: 3,
        isCurrentMonth: true,
      }, {
        day: 4,
        isCurrentMonth: true,
        isRostered: true
      }, {
        isCurrentMonth: true,
        day: 5,
        isRostered: true
      }, {
        isCurrentMonth: true,
        day: 6,
        isRostered: true
      }, {
        isCurrentMonth: true,
        day: 7,
        isRostered: true
      }, {
        isCurrentMonth: true,
        day: 8
      }, {
        isCurrentMonth: true,
        day: 9
      }]
    }, {
      days: [{
        day: 10,
        isCurrentMonth: true,
      }, {
        day: 11,
        isCurrentMonth: true,
      }, {
        isCurrentMonth: true,
        day: 12
      }, {
        isCurrentMonth: true,
        day: 13
      }, {
        isCurrentMonth: true,
        day: 14
      }, {
        isCurrentMonth: true,
        day: 15
      }, {
        isCurrentMonth: true,
        day: 16
      }]
    }, {
      days: [{
        day: 17,
        isCurrentMonth: true,
      }, {
        day: 18,
        isCurrentMonth: true,
      }, {
        isCurrentMonth: true,
        day: 19
      }, {
        isCurrentMonth: true,
        day: 20
      }, {
        isCurrentMonth: true,
        day: 21
      }, {
        isCurrentMonth: true,
        day: 22
      }, {
        isCurrentMonth: true,
        day: 23
      }]
    }, {
      days: [{
        day: 24,
        isCurrentMonth: true,
      }, {
        day: 25,
        isCurrentMonth: true,
        isCelebration: true,
        backgroundImageUrl: 'https://c.tadst.com/gfx/750w/christmas.jpg?1',
        backgroundSize: '175px'
      }, {
        isCurrentMonth: true,
        day: 26,
        isSpecial: true
      }, {
        isCurrentMonth: true,
        day: 27
      }, {
        isCurrentMonth: true,
        day: 28
      }, {
        isCurrentMonth: true,
        day: 29
      }, {
        isCurrentMonth: true,
        day: 30
      }]
    }, {
      days: [{
        day: 31,
        isCurrentMonth: true,
      }, {
        day: 1
      }, {
        day: 2
      }, {
        day: 3
      }, {
        day: 4
      }, {
        day: 5
      }, {
        day: 6
      }]
    }]
  };

  onRoster($event, daysData) {
    if (daysData.isCurrentMonth) {
      daysData.isRostered = !daysData.isRostered;
      if (this.lastDaySelected && $event.shiftKey) {
        let diff = this.lastDaySelected - daysData.day;
        let lastDateSelected = this.lastDaySelected;
        this.calendarData.weeks.forEach(function (week: any) {
          week.days.forEach(function (localDay: any, weekIndex: Number) {
            if (diff > 0) {
              if (localDay.day <= lastDateSelected && localDay.day >= daysData.day && localDay.isCurrentMonth && (weekIndex !== 0 && weekIndex !== 6)) {
                localDay.isRostered = true;
              }
            } else {
              if (localDay.day > lastDateSelected && localDay.day <= daysData.day && localDay.isCurrentMonth && (weekIndex !== 0 && weekIndex !== 6)) {
                localDay.isRostered = true;
              }
            }
          });
        });
      }
      this.lastDaySelected = daysData.day;
    }
  }

}
