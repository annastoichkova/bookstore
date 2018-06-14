import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  template: `
  <nav>
  <a routerLink="/home">Home</a>&nbsp;
  <a routerLink="/about">About</a>&nbsp;
  <a routerLink="/contacts">Contacts</a>&nbsp;
</nav>
  `
})
export class NavComponent implements OnInit {

  constructor(  private router: Router) { }

  ngOnInit() {
  }

}
