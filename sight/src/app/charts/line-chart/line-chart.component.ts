import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  
  constructor() { }


  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Sentiment Analysis',
        backgroundColor: 'rgba(6, 214, 160, 0.2)',
        borderColor: 'rgba(0, 200, 140, 0.5)',
        pointBackgroundColor: '#000',
        pointBorderColor: '#000',
        pointHoverBackgroundColor: '#555',
        pointHoverBorderColor: '#555',
        fill: 'origin',
      },
      {
        data: [ 28, 48, 40, 19, 86, 27, 90 ],
        label: 'Image Recognition',
        backgroundColor: 'rgba(255, 209, 102, 0.2)',
        borderColor: 'rgba(240, 180, 89, 0.5)',
        pointBackgroundColor: '#000',
        pointBorderColor: '#000',
        pointHoverBackgroundColor: '#555',
        pointHoverBorderColor: '#555',
        fill: 'origin',
      },
      {
        data: [ 180, 480, 770, 90, 1000, 270, 400 ],
        label: 'Forecasting',
        yAxisID: 'y-axis-1',
        backgroundColor: 'rgba(15, 78, 133, 0.2)',
        borderColor: 'rgba(3, 64, 128, 0.5)',
        pointBackgroundColor: '#000',
        pointBorderColor: '#000',
        pointHoverBackgroundColor: '#555',
        pointHoverBorderColor: '#555',
        fill: 'origin',
      }
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
  };


  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: '#000',
        },
        ticks: {
          color: '#ededed'
        }
      }
    }
  };

  public lineChartType: ChartType = 'line';

  lineChartLegend = true;


  ngOnInit(): void {
  }

}
