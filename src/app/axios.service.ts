import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  getMovies () {
    return this.http.get('http://api.tvmaze.com/shows')
  }

  getOneMovie(id: number) {
    return this.http.get(`http://api.tvmaze.com/shows${id}`)
  }

  updateOneMovie(id : number, movieObj : any) {
    return this.http.put(`http://api.tvmaze.com/shows${id}`, movieObj)
  }

  addAMovie(movieObj: any) {
    return this.http.post('http://api.tvmaze.com/shows', movieObj)
  }

  constructor(private http : HttpClient) { }
}
