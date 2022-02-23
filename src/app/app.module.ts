import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { MovieformComponent } from './movieform/movieform.component';
import { MoviesComponent } from './movies/movies.component';
//imports
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NgForm} from '@angular/forms';
import { HttpClientModule, HttpClient}from  '@angular/common/http'
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    MovieformComponent,
    MoviesComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
