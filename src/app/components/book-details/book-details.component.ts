import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  template: `
  <p>
  book-detail for {{bookId}}!
</p>
  `,
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
