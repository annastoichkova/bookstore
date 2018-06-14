import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
    {path: '**', component: PageNotFoundComponent },
    {path: 'about', component: AboutComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'nav', component: NavComponent},
    {path: 'books', component: BooksListComponent },
    {path: 'book/:id', component: BookDetailsComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

  export const routingComponents = [
    PageNotFoundComponent,
    AboutComponent,
    ContactsComponent,
    HomeComponent,
    NavComponent,
    BooksListComponent,
    BookDetailsComponent

  ];
