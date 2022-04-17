import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSet } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSet[];

  constructor() {
  }

  ngOnInit() {
    let startDateArry: any[] = [];
    let blinkArry: any[] = [];

    for (var i = 0; i < 7; i++) {
      blinkArry.push(Math.round(Math.random() * 100));
      startDateArry.push(Math.round(Math.random() * 100));
    }

    this.barChartData = [{ data: blinkArry, label: 'blinks' }];

    this.barChartLabels = [startDateArry];
    console.log('this is the issue!', this.barChartLabels);

    /* SOLUTION */
    this.barChartLabels = startDateArry;
    console.log('this is the fix!!!', this.barChartLabels);
  }


}
