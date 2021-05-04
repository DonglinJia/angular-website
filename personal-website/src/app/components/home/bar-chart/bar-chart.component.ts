import {Component, OnInit, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @ViewChild('chart') chart: ChartOptions;

  public chartOptions: ChartOptions;

  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: 'basic',
          data: [80, 90, 90, 90, 90, 85, 85, 80, 95, 40]
        }
      ],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          'TensorFlow',
          'Pytorch',
          'React',
          'Angular',
          'Django',
          'GAN',
          'Auto-encoder',
          'OpenCV',
          'Python',
          'C'
        ]
      }
    };
  }
}
