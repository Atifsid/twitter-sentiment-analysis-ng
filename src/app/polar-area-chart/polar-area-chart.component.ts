import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.scss']
})
export class PolarAreaChartComponent {
// PolarArea
public polarAreaChartLabels: string[] = [];
public polarAreaChartData: ChartData<'polarArea'> = {
  labels: this.polarAreaChartLabels,
  datasets: [ {
    data: [ 300, 500, 100, 40, 120 ],
    label: 'Series 1'
  } ]
};
public polarAreaLegend = true;

public polarAreaChartType: ChartType = 'polarArea';

// events
public chartClickedPolarArea({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHoveredPolarArea({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}
}
