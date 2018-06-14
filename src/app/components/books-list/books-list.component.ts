import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  template: `
  <ol>
    <li *ngFor="let book of books">
      <a routerLink="/book/{{book.id}}">
        <span>{{book.name}}</span>
      </a>
    </li>
  </ol>
`,
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
   books = [
          {'id': '1', 'name': 'book 1'},
          {'id': '2', 'name': 'book 2'},
          {'id': '3', 'name': 'book 3'} ];


  constructor() { }

  ngOnInit() {
  }

}
