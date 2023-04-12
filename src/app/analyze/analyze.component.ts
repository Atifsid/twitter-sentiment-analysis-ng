import { Component, ViewChild } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpClient, HttpParams } from '@angular/common/http';


import { default as Annotation } from 'chartjs-plugin-annotation';
import { Sentiment } from './model';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from '../polar-area-chart/polar-area-chart.component';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @ViewChild('pie') pie: PieChartComponent
  @ViewChild('polar') polar:PolarAreaChartComponent

  private newLabel? = 'New label';

  public queryParam: string;
  public rootURL = 'http://localhost:8082';
  public sentiment: Sentiment = {}
  public resData: number[] = []
  public commonLabels = ['negative', 'neutral', 'positive', 'realnegative', 'realpositive']

  constructor(private http: HttpClient) {
    Chart.register(Annotation)
  }

  // api
  public onGetSentiments(){
    this.resData = []
    this.http.get(this.rootURL + '/sentiment').subscribe((response :any) => {

      let data: Sentiment = response.data[0]

      this.resData.push(data.negative!)
      this.resData.push(data.neutral!)
      this.resData.push(data.positive!)
      this.resData.push(data.realnegative!)
      this.resData.push(data.realpositive!)

      this.pie.pieChartData = {
        labels: this.commonLabels,
        datasets: [ {data: this.resData} ]
      }

      this.polar.polarAreaChartData = {
        labels: this.commonLabels,
        datasets: [ {
          data: this.resData,
          label: 'Series 1'
        } ]
      }

      console.log(this.resData)
      console.log(data)
    })

  }
  
  public onSubmit(queryParam: string): void {
    const params = new HttpParams().set('query', queryParam);
    this.http.get(this.rootURL + '/tweets', { params })
      .subscribe(response => {
        // Tweets Fetched
        console.log(response)  
      });

      this.http.get(this.rootURL + '/analyze')
      .subscribe(response => {
        let body = JSON.parse(JSON.stringify(response)).body;
        // Handle API response
        console.log(body)   
      });
  }
  
  public onAnalyze(): void {
    this.http.get(this.rootURL + '/analyze')
      .subscribe(response => {
        // Handle API response
        console.log(response)   
      });   
  }
}
