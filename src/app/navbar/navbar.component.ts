import { Component, OnInit } from '@angular/core';
import { NavbarPageLink } from '../class/navbar-page-link';

const PAGES: NavbarPageLink[] = [
  {href:"/problemset", caption:"问题", subCaption:"Problem Set"},
  {href:"/status", caption:"状态", subCaption:"Status"},
  {href:"/rank", caption:"排名", subCaption:"Rank"},
  {href:"/contest", caption:"比赛", subCaption:"Contest"},
];

const NAVRIGHT: NavbarPageLink[] = [
  {href:"/login", caption:"登录", subCaption:"Login"},
  {href:"/register", caption:"注册", subCaption:"Register"}
];

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pages = PAGES;
  navRight = NAVRIGHT;

  constructor() { }

  ngOnInit() {
  }

}
