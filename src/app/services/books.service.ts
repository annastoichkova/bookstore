import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from '../interfaces/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
 // tslint:disable-next-line:max-line-length
  booksURL = `https://raw.githubusercontent.com/ProgressBG-WWW-Courses/BKA-Angular-Code/RequestsAndObsevables/RequestsAndObsevables/src/assets/data/books.json`;

  constructor(private http: HttpClient) { }

  fetchBooksObservable (): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.booksURL);
  }
  fetchBooksDirectURL() {
     return this.http.get(this.booksURL);
  }
}
