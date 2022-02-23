import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies : any[] = []
  constructor(private axios : AxiosService) { }

  ngOnInit(): void {
    this.axios.getMovies()
    .subscribe( (data : any) => { this.movies = data.splice(0,5)})
  }

}
