import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <p>
    about works!
  </p>
  <app-books-list></app-books-list>
  `
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
