import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieformComponent } from './movieform/movieform.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
{ path: 'movies', component: HomepageComponent, children: 
  [
    { path: '', component: MoviesComponent},
    { path: 'movie/:id', component: MovieformComponent},
    { path: 'add', component: AddComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
