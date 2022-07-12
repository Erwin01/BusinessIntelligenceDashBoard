import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }
  
 // Pie
 public pieChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    }
  }
}


public pieChartData: ChartData<'pie', number[], string | string[]> = {
  labels: [ [ 'XYZ Logistics', '' ], [ 'Main St Bakery', '', '' ], 'Acme Hostings' ],
  datasets: [ {
    data: [ 350, 450, 120 ]
  } ]
};

public pieChartType: ChartType = 'doughnut'; //pie,

public pieChartPlugins = [ ];


  ngOnInit(): void {
  }

}
