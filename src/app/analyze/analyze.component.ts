import { Component, ViewChild } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpClient, HttpParams } from '@angular/common/http';


import { default as Annotation } from 'chartjs-plugin-annotation';
import { Sentiment, Tweet } from './model';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from '../polar-area-chart/polar-area-chart.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @ViewChild('pie') pie: PieChartComponent
  @ViewChild('polar') polar:PolarAreaChartComponent
  @ViewChild('bar') bar: BarChartComponent

  private newLabel? = 'New label';

  public queryParam: string;
  public rootURL = 'http://localhost:8082';
  public sentiment: Sentiment = {}
  public resData: number[] = []
  public commonLabels = ['negative', 'neutral', 'positive', 'realnegative', 'realpositive']
  public tweets: Array<Tweet> = []
  displayedColumns: string[] = this.commonLabels
  dataSource = this.resData;
  isTableVisible: boolean = false
  isChartVisible: boolean = false

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

      this.bar.barChartData = {
        labels: this.commonLabels,
        datasets: [ {
          data: this.resData,
          label: 'Series 1'
        } ]
      }

      console.log(this.resData)
      console.log(data)
    })
    this.isChartVisible = !this.isChartVisible

  }
  
  public onSubmit(queryParam: string): void {
    const params = new HttpParams().set('query', queryParam);
    this.http.get(this.rootURL + '/tweets', { params })
      .subscribe(response => {
        this.tweets = []
        let body = JSON.parse(JSON.stringify(response));
        for (let index = 0; index < 100; index++) {
          this.tweets.push(body.data[index])
        } 
        console.log(body.data)  
      });

      this.http.get(this.rootURL + '/analyze')
      .subscribe(response => {
        let body = JSON.parse(JSON.stringify(response)).body;
        console.log(body)
        alert("Sentiments Retrived")
      });
  }
  
  public onAnalyze(): void {
    this.http.get(this.rootURL + '/analyze')
      .subscribe(response => {
        console.log(response)   
      });   
  }

  onGetTweets(){
    this.http.get(this.rootURL + '/fetchTweets')
      .subscribe(response => {
        let tweets= JSON.parse(JSON.stringify(response))
        for (let index = 0; index < 100; index++) {
          this.tweets.push(tweets[index])
        } 
      }); 
      this.isTableVisible = !this.isTableVisible  
  }
}
