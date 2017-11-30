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
  employeesCount: number = 1700;
  registeredCount: number = 580;
  swipedCount: number = 12;
  remainingCount: number = 568;

  constructor() {
    setInterval(() => {
      let count = Math.floor(Math.random() * 6);
      if ((count + this.swipedCount) < this.employeesCount) {
        this.swipedCount += count;
        this.remainingCount -= count;
      }
    }, 2000);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dateToday = new Date();
    this.renderUsageTrendChart();
    this.renderRatingsTrendChart();
    this.renderWastageTrendChart();
    this.renderHeatMapChart();
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

  renderHeatMapChart() {
    jQuery('#heatMapContainer').highcharts(this.getHeatMapChartConfig());
  }

  getDateRange() {
    return new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
  }

  getRatingsChartConfig() {
    let chartConfig = {
      "chart": {
        "backgroundColor": "white"
      },
      "credits": {
        "enabled": false
      },
      "title": {
        "text": "Ratings Trend"
      },
      "xAxis": {
        "categories": this.getDateRange()
      },
      "yAxis": {
        "title": {
          "text": "Average Rating"
        }
      },
      "legend": {
        "align": "center",
        "verticalAlign": "bottom",
        "enabled": false
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
          "data": [{ "y": 2.4, "rating": [10, 8, 8, 6, 5] }, { "y": 2.94, "rating": [8, 7, 7, 7, 7] }, { "y": 3.1, "rating": [5, 6, 7, 8, 6] }, { "y": 2.7, "rating": [8, 9, 5, 4, 6] },{ "y": 2.1, "rating": [15, 10, 10, 6, 5] }]
        }
      ],
      "navigation": {
        "buttonOptions": {
          "enabled": false
        }
      },
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
        "type": "column",
        "backgroundColor": "white"
      },
      "credits": {
        "enabled": false
      },
      "navigation": {
        "buttonOptions": {
          "enabled": false
        }
      },
      "title": {
        "text": "Usage"
      },
      "xAxis": {
        "categories": this.getDateRange()
      },
      "yAxis": {
        "min": 0,
        "title": {
          "text": "Number of Employees"
        }
      },
      "tooltip": {
        "headerFormat": '<span style="font-size:10px"></span><table>',
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
            390,
            350
          ],
          "color": "#36a1eb"
        },
        {
          "name": "Actual",
          "data": [
            350,
            450,
            430,
            440,
            200
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
        "categories": this.getDateRange()
      },
      "yAxis": {
        "title": {
          "text": "Total Wastage in KG"
        }
      },
      "legend": {
        "align": "center",
        "verticalAlign": "bottom",
        "enabled": false
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
            8.5,
            7.5,
            10.3,
            12.5
          ]
        }
      ],
      "navigation": {
        "buttonOptions": {
          "enabled": false
        }
      },
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

  getHeatMapChartConfig() {
    let chartConfig = {
        title: {
            text: 'Time Trend'
        },
        "credits": {
          "enabled": false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'No of Employees',
            data: dataVal
        }],
        "navigation": {
          "buttonOptions": {
            "enabled": false
          }
        },
        xAxis: {
          type: 'datetime',
          dateTimeLabelFormats: {
            day: '%H:%M:%S'
          },
          labels: {
            formatter: function () {
              return Highcharts.dateFormat('%H %M', this.value);
            }
          },
          title: {
              text: 'Time'
          }
        },
        "yAxis": {
          "tickInterval": 2,
          "min": 0,
          "title": {
            "text": "Number of Employees"
          }
        }
    };
    return chartConfig;
  }
}