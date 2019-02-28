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
    this.getMovies();
    this.setDecade("2000");
  }

  getMovies() {
    /**
     * GETS Batman movies from  moviesService
     * @return {function} setMovieMetaData()
     */

    this.moviesService.getBatmanMovies()
      .subscribe(
        response => {
          this.setMovieMetaData(response);
        },
        error => {
          console.log("Error", error);
        }
      );
  };

  putMoviesIntoDecades(movieMeta){
    /**
     * Puts movieMeta object into specific arrays, based on year
     * and sorts associated arrays
     * @param {object} movieMeta
     * @return {function} array.push()
     * @return {function} sortMoviesByYear()
     */

    if (movieMeta.year >= "2000") {
      this.movies2000s.push(movieMeta);
      this.sortMoviesByYear(this.movies2000s);
    } else if ( movieMeta.year >= "1990" && movieMeta.year <= "1999") {
      this.movies1990s.push(movieMeta);
      this.sortMoviesByYear(this.movieMeta);
    }
  };

  setDecade(decade) {
    /**
     * Sets movies array and
     * Toggles 'active' class on btn
     * @param {decade} string
     */

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
    /**
     * Sets/parses movie meta data
     * @param {object} response
     * @return {function} putMoviesIntoDecades()
     */

    for (let i=0; i<response.Search.length; i++) {
      this.moviesService.getMovieMetaData(response.Search[i].imdbID)
        .subscribe(
          response => {
            let movieMeta = {
              title: response["Title"],
              year: response["Year"],
              rated: response["Rated"],
              released: response["Released"],
              runtime: response["Runtime"],
              poster: response["Poster"],
              plot: response["Plot"],
              imdbID: response["imdbID"],
            }
            this.putMoviesIntoDecades(movieMeta);
          },
          error => {
            console.log("Error", error);
          }
        );
    }
  };

  sortMoviesByYear(array) {
    /**
     * Sorts array based on metaData.year
     * @param {array} array
     * @return {function} sort()
     */

    array.sort((a, b) => a.year - b.year );
  };

  toggleActiveBtn(decade) {
    /**
     * Sets class attribute activeBtn based on decade 
     * @param {decade} string
     */

    this.activeBtn = decade
  };

}
