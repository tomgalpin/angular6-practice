import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {
  private movies = [];
  private movies2000s = [];
  private movies1990s = [];
  private activeBtn = "2000";


  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.setMovies();
    this.setDecade("2000");
  }

  toggleActiveBtn(decade) {
    this.activeBtn = decade
  };

  setDecade(decade) {
    this.toggleActiveBtn(decade);

    switch(decade) {
      case "1990":
        this.movies = this.movies1990s;
        break;
      case "2000":
        this.movies = this.movies2000s;
        break;
      default:
        this.movies = this.movies2000s;
    }
  };

  setMovieMetaData(response) {
    for (let i=0; i<response.Search.length; i++) {
      this.moviesService.getMovieMetaData(response.Search[i].imdbID)
        .subscribe(
          response => {
            let movieMeta = {
              title: response.Title,
              year: response.Year,
              rated: response.Rated,
              released: response.Released,
              runtime: response.Runtime,
              poster: response.Poster,
              plot: response.Plot,
              imdbID: response.imdbID,
            }

            if (movieMeta.year >= "2000") {
              this.movies2000s.push(movieMeta);
              this.sortMoviesByYear(this.movies2000s);
            } else if ( movieMeta.year >= "1990" && movieMeta.year <= "1999") {
              this.movies1990s.push(movieMeta);
              this.sortMoviesByYear(this.movies1990s);
            }
          },
          error => {
            console.log("Error", errorResponse);
          }
        );
    }
  };

  sortMoviesByYear(array) {
    array.sort((a, b) => a.year - b.year );
  };
  setMovies() {
    this.moviesService.getBatmanMovies()
      .subscribe(
        response => {
          this.setMovieMetaData(response);
        },
        error => {
          console.log("Error", errorResponse);
        }
      );
  };

}
