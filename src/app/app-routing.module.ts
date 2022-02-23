import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { MovieformComponent } from './movieform/movieform.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
{ path: 'movies', component: MoviesComponent, children: 
  [
    { path: 'movies/:id', component: MovieformComponent},
    { path: 'movies/add', component: AddComponent},
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
