import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-as-list',
  template: `
    <p>
      books-as-list works!
    </p>
    <ul>
      <li *ngFor="let book of books">{{book.author}} - {{book.title}} - {{book.price}}</li>
    </ul>
  `,
  styles: []
})
export class BooksAsListComponent implements OnInit {
  books = [];
  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.fetchBooksObservable().subscribe(data => this.books = data);
  }

}
