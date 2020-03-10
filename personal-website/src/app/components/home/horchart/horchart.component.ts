import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-horchart',
  templateUrl: './horchart.component.html',
  styleUrls: ['./horchart.component.scss']
})
export class HorchartComponent implements OnInit {

  public chartType = 'radar';
  public chartData = [];
  public chartLabels = [];
  public chartOptions: ChartOptions;

  constructor() { }

  ngOnInit(): void {
    this.chartData = [
      { data: [80, 90, 90, 70, 60, 80], label: 'affection' },
      { data: [80, 100, 100, 90, 100, 90], label: 'fatigue after exercise'},
      { data: [30, 100, 80, 80, 40, 100], label: 'likelihood'}
    ];
    this.chartLabels = [
      'Swimming', 'Cycling', 'Skiing', 'Badminton', 'Snowboarding', 'Jogging'
    ];
    this.setChartOptions();
  }

  setChartOptions() {
    this.chartOptions = {
      responsive: true,
      scale: {
        ticks: {
          min: 0
        }
      }
    };
  }
}
