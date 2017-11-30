import { Component, OnInit, AfterViewInit } from '@angular/core';
import dataVal from '../data/data.json';

declare var jQuery: any;
declare var Highcharts: any;
declare var Chart: any;
declare var Highstock: any;

@Component({
  selector: 'my-chart',
  templateUrl: './overall-data.component.html',
  styleUrls: ['./overall-data.component.css']
})

export class OverallDataComponent implements OnInit, AfterViewInit {

  dateToday: Date;

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dateToday = new Date();
    this.renderUsageTrendChart();
    this.renderRatingsTrendChart();
    this.renderWastageTrendChart();
  }


  getFirstDayOfWeek() {
    let dateVal = new Date();
    let day = dateVal.getDay();
    let diff = dateVal.getDate() - day + (day == 0 ? -6 : 1);
    let firstDay = new Date(dateVal.setDate(diff));
    firstDay.setHours(0, 0, 0, 0);
    return firstDay;
  }

  getCurrentWeekDateRange() {
    let dateRange: Date[] = new Array();
    let weekStartDate: Date = this.getFirstDayOfWeek();
    let offset = new Date().getTimezoneOffset() * 60 * 1000;
    for (let time = weekStartDate.getTime(); time < this.dateToday.getTime(); time = time + 86400000) {
      dateRange.push(new Date(time - offset));
    }
    return dateRange;
  }

  getFirstDayofMonth() {
    let dateVal = new Date();
    let firstDay = new Date(dateVal.getFullYear(), dateVal.getMonth(), 1);
    firstDay.setHours(0, 0, 0, 0);
    return firstDay;
  }

  renderRatingsTrendChart() {
    jQuery('#ratingsTrendContainer').highcharts(this.getRatingsChartConfig());
  }

  renderUsageTrendChart() {
    jQuery('#usageTrendContainer').highcharts(this.getUsageChartConfig());
  }

  renderWastageTrendChart() {
    jQuery('#wastageTrendContainer').highcharts(this.getWastageChartConfig());
  }

  getDateRange() {
    return this.getCurrentWeekDateRange();
  }

  getRatingsChartConfig() {
    let chartConfig = {
      "chart": {
        "zoomType": "x",
        "backgroundColor": "white"
      },
      "credits": {
        "enabled": false
      },
      "title": {
        "text": "Ratings Trend"
      },
      "xAxis": {
        "type": "datetime",
        "categories": this.getDateRange(),
        "dateTimeLabelFormats": {
          "hour": '%l:%M %p'
        },
        labels: {
          formatter: function () {
            return Highcharts.dateFormat('%d %b, %Y', this.value);
          }
        }
      },
      "yAxis": {
        "title": {
          "text": "Average Ratings"
        }
      },
      "legend": {
        "align": "center",
        "verticalAlign": "bottom"
      },
      "plotOptions": {
        "series": {
          "label": {
            "connectorAllowed": false
          },
          "color": "#31708f"
        }
      },
      "tooltip": {
        "formatter": function () {
          return 'Average Rating: <b>' + this.point.y + '</b><br>' + '1 Star : <b>' + this.point.rating[0] + '</b>' + '<br>2 Stars : <b>' + this.point.rating[1] + '</b>' + '<br>3 Stars : <b>' + this.point.rating[2] + '</b>' + '<br>4 Stars : <b>' + this.point.rating[4] + '</b>' + '<br>5 Stars : <b>' + this.point.rating[4] + '</b>';
        }
      },
      "series": [
        {
          "type": "line",
          "name": "Average Ratings",
          "data": [{ "y": 2.4, "rating": [10, 8, 8, 6, 5] }, { "y": 2.94, "rating": [8, 7, 7, 7, 7] }, { "y": 3.1, "rating": [5, 6, 7, 8, 6] }, { "y": 2.7, "rating": [8, 9, 5, 4, 6] }]
        }
      ],
      "responsive": {
        "rules": [
          {
            "condition": {
              "maxWidth": 500
            },
            "chartOptions": {
              "legend": {
                "layout": "horizontal",
                "align": "center",
                "verticalAlign": "bottom"
              }
            }
          }
        ]
      }
    };
    return chartConfig;
  }

  getUsageChartConfig() {
    let chartConfig = {
      "chart": {
        "type": "bar",
        "backgroundColor": "white"
      },
      "credits": {
        "enabled": false
      },
      "title": {
        "text": "Usage Trend"
      },
      "xAxis": {
        "type": "datetime",
        "categories": this.getDateRange(),
        dateTimeLabelFormats: {
          hour: '%l:%M %p'
        },
        labels: {
          formatter: function () {
            return Highcharts.dateFormat('%d %b, %Y', this.value);
          }
        }
      },
      "yAxis": {
        "min": 0,
        "title": {
          "text": "Number of Employees"
        }
      },
      "tooltip": {
        "headerFormat": '<span style="font-size:10px">{point.key}</span><table>',
        "pointFormat": '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
        "footerFormat": '</table>',
        "shared": true,
        "useHTML": true
      },
      "plotOptions": {
        "column": {
          "pointPadding": 0.2,
          "borderWidth": 0
        }
      },
      "series": [
        {
          "name": "Registered",
          "data": [
            400,
            500,
            550,
            390
          ],
          "color": "#36a1eb"
        },
        {
          "name": "Actual",
          "data": [
            350,
            450,
            430,
            440
          ],
          "color": "#bbe07f"
        }
      ]
    };
    return chartConfig;
  }

  getWastageChartConfig() {
    let chartConfig = {
      "chart": {
        "backgroundColor": "white"
      },
      "title": {
        "text": "Wastage Trend"
      },
      "credits": {
        "enabled": false
      },
      "xAxis": {
        "type": "datetime",
        "categories": this.getDateRange(),
        dateTimeLabelFormats: {
          hour: '%l:%M %p'
        },
        labels: {
          formatter: function () {
            return Highcharts.dateFormat('%d %b, %Y', this.value);
          }
        }
      },
      "yAxis": {
        "title": {
          "text": "Total Wastage in KG"
        }
      },
      "legend": {
        "align": "center",
        "verticalAlign": "bottom"
      },
      "tooltip": {
        "formatter": function () {
          return 'Wastage: <b>' + this.point.y + ' KG</b>';
        }
      },
      "plotOptions": {
        "series": {
          "label": {
            "connectorAllowed": false
          },
          "color": "#ad2121"
        }
      },
      "series": [
        {
          "name": "Wastage",
          "data": [
            12,
            8,
            7,
            10
          ]
        }
      ],
      "responsive": {
        "rules": [
          {
            "condition": {
              "maxWidth": 500
            },
            "chartOptions": {
              "legend": {
                "layout": "horizontal",
                "align": "center",
                "verticalAlign": "bottom"
              }
            }
          }
        ]
      }
    };
    return chartConfig;
  }
}