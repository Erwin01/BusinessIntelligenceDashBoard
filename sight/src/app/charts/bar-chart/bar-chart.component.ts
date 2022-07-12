import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';


// const SAMPLE_BARCHART_DATA: any[] = [
//   { data:[65,59,80,81,56,54,30], label: 'Q3 Sales' },
//   { data:[25,39,60,91,36,54,50], label: 'Q4 Sales' }
// ];

// const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };
  
  public barChartType: ChartType = 'bar'; //

  public barChartPlugins = [
    
  ];


  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65,59,80,81,56,54,30 ], label: 'Q3 Sales' },
      { data: [ 25,39,60,91,36,54,50 ], label: 'Q4 Sales' }
    ]
  };

  // public barChartData: any[] = SAMPLE_BARCHART_DATA;
  // public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  // public barChartType = 'bar';
  // public barChartLegend = false;
  // public barChartOptions: any = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // }

  ngOnInit(): void {
  }

}
