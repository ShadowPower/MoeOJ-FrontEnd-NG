import { Component, OnInit } from '@angular/core';
import { Notice } from '../../class/notice';
import { OjService } from '../oj.service';

import * as showdown from 'showdown';

@Component({
  selector: 'app-oj',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.css'],
  providers: [OjService]
})
export class IndexComponent implements OnInit {
  notices: Notice[];
  md = new showdown.Converter();

  constructor(private OjService: OjService) { }

  getNotices(): void {
    this.OjService.getNotice().then(notices => this.notices = notices);
  }

  ngOnInit() {
    document.title = "首页";
    this.getNotices();
  }

}
