import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.css']
})
export class MovieformComponent implements OnInit {

id: any
movieObj : any
  constructor(private axios : AxiosService, private route: ActivatedRoute) 
  {

   }
updateMovie(formObj: any) {
  console.log(formObj.value)
}


  ngOnInit(): void {
    this.route.params.subscribe( params => 
      {
        this.id = +params['id']
        this.axios.getOneMovie(this.id).subscribe( (data : any) => 
          { this.movieObj = data;   console.log(this.movieObj)} )
      
          
      })
  }

}
