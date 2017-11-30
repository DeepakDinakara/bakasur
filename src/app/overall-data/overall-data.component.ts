import {Component, OnInit, AfterViewInit } from '@angular/core';
import data from '../data/data.json';

declare var jQuery:any;
declare var Highcharts:any;
declare var Highstock:any;

@Component({
    selector: 'my-chart',
    templateUrl: './overall-data.component.html',
    styleUrls: ['./overall-data.component.css']
})

export class OverallDataComponent implements OnInit, AfterViewInit {

    dateToday:Date;
    
    constructor() { 
    
    }

    ngOnInit() {
      
    }
	
    ngAfterViewInit() {
        this.dateToday = new Date();
    	this.renderUsageTrendChart();
    	this.renderRatingsTrendChart();
        this.renderWastageTrendChart();
    	console.log("First Day of week:" + this.getFirstDayOfWeek(this.dateToday));
    	console.log("First Day of month:" + this.getFirstDayofMonth(this.dateToday));
    	console.log(data);
    }
 
    getFirstDayOfWeek(dateVal:Date) {
    	let day = dateVal.getDay();
      	let diff = dateVal.getDate() - day + (day == 0 ? -6:1);
  		return new Date(dateVal.setDate(diff));
    }

    getFirstDayofMonth(dateVal:Date) {
    	return new Date(dateVal.getFullYear(), dateVal.getMonth(), 1);
    }

    renderRatingsTrendChart(){
        jQuery('#ratingsTrendContainer').highcharts(this.getRatingsChartConfig());
    }

    renderUsageTrendChart(){
        jQuery('#usageTrendContainer').highcharts(this.getUsageChartConfig());
    }

    renderWastageTrendChart(){
        jQuery('#wastageTrendContainer').highcharts(this.getWastageChartConfig());
    }

    getRatingsChartConfig() {
        let chartConfig = {
          "title": {
            "text": "Ratings Trend"
          },
          "xAxis": {
            "categories": [
              "Dec 01, 2017",
              "Dec 02, 2017",
              "Dec 03, 2017",
              "Dec 04, 2017",
              "Dec 05, 2017"
            ]
          },
          "yAxis": {
            "title": {
              "text": "Average Ratings"
            }
          },
          "legend": {
            "layout": "vertical",
            "align": "right",
            "verticalAlign": "middle"
          },
          "plotOptions": {
            "series": {
              "label": {
                "connectorAllowed": false
              },
              "tooltip": {
                "enabled": false
              }
            }
          },
          "series": [
            {
              "name": "Average Ratings",
              "data": [
                4,
                5,
                6,
                5,
                3
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

    getUsageChartConfig() {
        let chartConfig = {
          "chart": {
            "type": "column"
          },
          "title": {
            "text": "Usage Trend"
          },
          "xAxis": {
            "categories": [
              "Dec 01, 2017",
              "Dec 02, 2017",
              "Dec 03, 2017",
              "Dec 04, 2017",
              "Dec 05, 2017"
            ],
            "crosshair": true
          },
          "yAxis": {
            "min": 0,
            "title": {
              "text": "Number of Employees"
            }
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
                300
              ]
            },
            {
              "name": "Actual",
              "data": [
                350,
                450,
                430,
                340,
                100
              ]
            }
          ]    
        };
        return chartConfig;
    }

    getWastageChartConfig() {
        let chartConfig = {
          "title": {
            "text": "Wastage Trend"
          },
          "xAxis": {
            "categories": [
              "Dec 01, 2017",
              "Dec 02, 2017",
              "Dec 03, 2017",
              "Dec 04, 2017",
              "Dec 05, 2017"
            ]
          },
          "yAxis": {
            "title": {
              "text": "Total Wastage in KG"
            }
          },
          "legend": {
            "layout": "vertical",
            "align": "right",
            "verticalAlign": "middle"
          },
          "plotOptions": {
            "series": {
              "label": {
                "connectorAllowed": false
              }
            }
          },
          "series": [
            {
              "name": "Wastage",
              "data": [
                10,
                12,
                9,
                30,
                5
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