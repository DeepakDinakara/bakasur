import {Component, OnInit, AfterViewInit } from '@angular/core';
 
declare var jQuery:any;
 
@Component({
    selector: 'my-chart',
    templateUrl: './overall-data.component.html',
    styleUrls: ['./overall-data.component.css']
})

export class OverallDataComponent implements OnInit, AfterViewInit {

	dateoff:Date;
 
    ngAfterViewInit() {
    	this.renderStackedColumnChart();
    	this.renderPieChart();
    	this.renderLineChart();
    	this.dateoff = new Date();
    	console.log(this.dateoff);
    }
 
    renderStackedColumnChart(){
    	jQuery('#ratingsStackedColumnContainer').highcharts({
	    chart: {
        type: 'column'
    },
    title: {
        text: 'Ratings'
    },
    xAxis: {
        categories: ['Dec 01, 2017', 'Dec 02, 2017', 'Dec 03, 2017', 'Dec 04, 2017', 'Dec 05, 2017']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Ratings'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: '1 Star',
        data: [5, 3, 4, 7, 2]
    }, {
        name: '2 Stars',
        data: [2, 2, 3, 2, 1]
    }, {
        name: '3 Stars',
        data: [3, 4, 4, 2, 5]
    },
     {
        name: '4 Stars',
        data: [10, 4, 4, 2, 5]
    },
     {
        name: '5 Stars',
        data: [20, 4, 4, 2, 5]
    }]

		    });
	    }

renderPieChart(){
    	jQuery('#ratingsPieColumnContainer').highcharts({
	    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Average Ratings by Menu'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: 'black'
                }
            }
        }
    },
    series: [{
        name: 'Average Rating',
        colorByPoint: true,
        data: [{
            name: 'Menu1',
            y: 70
        }, {
            name: 'Menu2',
            y: 30,
            sliced: true,
            selected: true
        }]
    }]
		    });
	    }

	    renderLineChart(){
	    	jQuery('#usageTrendContainer').highcharts({
	   title: {
        text: 'Usage Trend'
    },

 xAxis: {
        categories: ['Dec 01, 2017', 'Dec 02, 2017', 'Dec 03, 2017', 'Dec 04, 2017', 'Dec 05, 2017']
        },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            }
        }
    },

    series: [{
        name: 'Registered',
        data: [400, 500, 550, 390, 300]
    }, {
        name: 'Actual',
        data: [350, 450, 430, 340, 100]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

		    });
	    }

    constructor() { 
	
  }

  ngOnInit() {
	  
  }

}