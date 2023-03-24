import { Component, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpClient, HttpParams } from '@angular/common/http';


import { default as Annotation } from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  private newLabel? = 'New label';

  public queryParam: string;
  public rootURL = 'http://localhost:8082';

  constructor(private http: HttpClient) {
    Chart.register(Annotation)
  }
  
  public onSubmit(): void {
    const params = new HttpParams().set('queryParam', this.queryParam);
    console.log(params)
    this.http.get(this.rootURL + '/tweets/', { params })
      .subscribe(response => {
        // Handle API response
        console.log(response)
        
      });
  }
  
    // Pie
    public pieChartOptions: ChartConfiguration['options'] = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        datalabels: {
          formatter: (value, ctx) => {
            if (ctx.chart.data.labels) {
              return ctx.chart.data.labels[ctx.dataIndex];
            }
          },
        },
      }
    };
    public pieChartData: ChartData<'pie', number[], string | string[]> = {
      labels: [ [ 'Positive'], [ 'Negative' ], 'Neutral' ],
      datasets: [ {
        data: [ 300, 500, 100 ]
      } ]
    };
    public pieChartType: ChartType = 'pie';
    public pieChartPlugins = [ DatalabelsPlugin ];
  
    changeLabels(): void {
      const words = [ 'hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
        'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
        'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
        'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
        'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny' ];
      const randomWord = () => words[Math.trunc(Math.random() * words.length)];
      this.pieChartData.labels = new Array(3).map(_ => randomWord());
  
      this.chart?.update();
    }
  
    addSlice(): void {
      if (this.pieChartData.labels) {
        this.pieChartData.labels.push([ 'Line 1', 'Line 2', 'Line 3' ]);
      }
  
      this.pieChartData.datasets[0].data.push(400);
  
      this.chart?.update();
    }
  
    removeSlice(): void {
      if (this.pieChartData.labels) {
        this.pieChartData.labels.pop();
      }
  
      this.pieChartData.datasets[0].data.pop();
  
      this.chart?.update();
    }
  
    changeLegendPosition(): void {
      if (this.pieChartOptions?.plugins?.legend) {
        this.pieChartOptions.plugins.legend.position = this.pieChartOptions.plugins.legend.position === 'left' ? 'top' : 'left';
      }
  
      this.chart?.render();
    }
  
    toggleLegend(): void {
      if (this.pieChartOptions?.plugins?.legend) {
        this.pieChartOptions.plugins.legend.display = !this.pieChartOptions.plugins.legend.display;
      }
  
      this.chart?.render();
    }

  // Line
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [ 28, 48, 40, 19, 86, 27, 90 ],
        label: 'Series B',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [ 180, 480, 770, 90, 1000, 270, 400 ],
        label: 'Series C',
        yAxisID: 'y1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
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
      y:
        {
          position: 'left',
        },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },

    plugins: {
      legend: { display: true },
      annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'x',
            value: 'March',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              display: true,
              position: 'center',
              color: 'orange',
              content: 'LineAnno',
              font: {
                weight: 'bold'
              }
            }
          },
        ],
      }
    }
  };

  public lineChartType: ChartType = 'line';

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] = AnalyzeComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = AnalyzeComponent.generateNumber(i);
      x.data.push(num);
    });
    this.lineChartData?.labels?.push(`Label ${ this.lineChartData.labels.length }`);

    this.chart?.update();
  }

  public changeColor(): void {
    this.lineChartData.datasets[2].borderColor = 'green';
    this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    this.chart?.update();
  }

  public changeLabel(): void {
    const tmp = this.newLabel;
    this.newLabel = this.lineChartData.datasets[2].label;
    this.lineChartData.datasets[2].label = tmp;

    this.chart?.update();
  }
}
