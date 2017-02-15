import { Component, OnInit } from '@angular/core';
import { Notice } from '../class/notice';
import * as showdown from 'showdown';

//临时使用，待修改
const NOTICES: Notice[] = [
  { title:"MoeOJ上线了！！！", author:"喵喵", date:"2017/1/11 12:34", body:"MoeOJ正式上线啦！  \n太好了" },
  { title:"测试", author:"喵喵", date:"2017/1/13 23:59", body:"这是一条测试公告" },
  { title:"这是一个标题看起来比较长的测试",
    author:"世界上最萌的管理员",
    date:"2017/12/31 14:32",
    body: `第一段  
第一段第二行

第二段
### 小标题` },
];

@Component({
  moduleId: module.id,
  selector: 'app-oj',
  templateUrl: './oj.component.html',
  styleUrls: ['./oj.component.css']
})
export class OjComponent implements OnInit {
  notices = NOTICES;
  md = new showdown.Converter();

  constructor() { }

  ngOnInit() {
  }

}
