import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Notice } from '../class/notice';
import { NOTICES } from './mock-notice';
import { Http } from "@angular/http";

@Injectable()
export class OjService {
  private noticeUrl = '/api/notices';

  constructor(private http: Http) { }

  getNotice(): Promise<Notice[]> {
    //return this.http.get(this.noticeUrl)
    //  .toPromise()
    //  .then(response => response.json().data as Notice[])
    //  .catch(this.handleError);

    //return Promise.resolve(NOTICES);
    // 模拟加载
    return new Promise(resolve => {
      setTimeout(() => resolve(NOTICES), 1000);
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('有错误发生：', error);
    return Promise.reject(error.message || error);
  }
}
