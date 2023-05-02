import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Tweet, Sentiment } from '../analyze/model';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from '../polar-area-chart/polar-area-chart.component';

@Component({
  selector: 'app-skullcandy',
  templateUrl: './skullcandy.component.html',
  styleUrls: ['./skullcandy.component.scss']
})
export class SkullcandyComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @ViewChild('pie') pie: PieChartComponent
  @ViewChild('polar') polar:PolarAreaChartComponent
  @ViewChild('bar') bar: BarChartComponent

  skullCandy: Array<string> = ['Skullcandy Crusher Evo', 'Skullcandy Hesh ANC', 'Skullcandy Riff Wireless']
  tweets: Array<Tweet> = []
  isTableVisible: boolean = false
  isChartVisible:boolean = false
  public resData: number[] = []
  public commonLabels = ['negative', 'neutral', 'positive', 'realnegative', 'realpositive']

  public rootURL = 'http://localhost:8082';
  constructor(private http: HttpClient){

  }

  getAnalysis(iphone: string){
    const params = new HttpParams().set('query', iphone);
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

  onGetSentiments(){
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
}
