import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { JokeComponent } from './components/joke/joke.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AutofocusDirective,
    JokeComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
