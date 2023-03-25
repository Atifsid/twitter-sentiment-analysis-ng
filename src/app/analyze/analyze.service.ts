import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Tweets } from './tweet';
import { Result } from './analysis';

@Injectable({
  providedIn: 'root'
})
export class AnalyzeService {

  constructor(private http: HttpClient) { }

  public queryParam: string;

  rootURL = 'http://localhost:8081';

  public getTweets(query: string): Observable<Tweets> {
    let queryParams = new HttpParams().append("query",query);
    return this.http.get<Tweets>(this.rootURL + '/tweets', {params:queryParams});
  }

  public getAnalysis(): Observable<Result>{
    return this.http.get<Result>(this.rootURL + '/analyze');
  }
}
