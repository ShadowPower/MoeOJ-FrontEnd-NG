import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Notice } from '../class/notice';
import { NOTICES, PROBLEMLIST } from './mock-data';
import { Http, Response } from "@angular/http";
import { ProblemList } from "../class/problem-list";

@Injectable()
export class OjService {
  private host = 'http://127.0.0.1:8000';
  private noticeUrl = '/api/notices/';

  constructor(private http: Http) { }

  getNotice(): Promise<Notice[]> {
    return this.http.get(this.host + this.noticeUrl)
      .toPromise()
      .then(response => response.json() as Notice[])
      .catch(this.handleError);
  }

  getProblemList(): Promise<ProblemList[]> {
    return Promise.resolve(PROBLEMLIST);
  }

  private handleError(error: any): Promise<any> {
    console.error('有错误发生：', error);
    return Promise.reject(error.message || error);
  }
}
