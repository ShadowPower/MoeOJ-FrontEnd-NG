import { Component, OnInit } from '@angular/core';
import { ProblemList } from '../../class/problem-list';
import { OjService } from '../oj.service';

@Component({
  selector: 'app-problemset',
  templateUrl: './problemset.component.html',
  styleUrls: ['./problemset.component.css'],
  providers: [OjService]
})
export class ProblemsetComponent implements OnInit {
  problemList: ProblemList[];

  constructor(private OjService: OjService) { }

  getProblemList(): void {
    this.OjService.getProblemList().then(problemList => this.problemList = problemList);
  }

  ngOnInit() {
    document.title = '题目列表';
    this.getProblemList();
  }

}
