import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage implements OnInit {
  name: string = "";
  type: string = "";
  actor: string = "";
  constructor(private router: Router, private movies: MoviesService) { }

  ngOnInit() {
  }
  backMain(){
    this.router.navigateByUrl("loggedin");
  }
  sendToMain(){
    this.movies.createAMovie(this.name, this.type, this.actor);
    this.router.navigateByUrl("loggedin");
  }
}
