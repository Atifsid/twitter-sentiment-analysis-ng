export interface Tweet {
    id: Number;
    userName: string;
    tweetText:string;
    createdAt: string;
    }
  
  export interface Tweets {
    data: Tweet[];
  }

  export interface Sentiment{
    negative?: number,
    neutral?: number,
    positive?: number,
    realnegative?: number,
    realpositive?: number
  }


  export interface SentimentResponse {
    code: number
    message: string
    status: string
    data: Sentiment[]
  }