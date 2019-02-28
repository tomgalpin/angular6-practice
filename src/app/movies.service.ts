import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private apiKey = 'a30b45b5';
  private omdbApi = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  getBatmanMovies() {
    /**
     * GET to get all Batman movies from omdbapi
     * @return {object}
     */

    const batmanApi = this.omdbApi + `?s=Batman` + `&apikey=` + `${this.apiKey}`;
    return this.http.get(batmanApi);
  };

  getMovieMetaData(imdbID){
    /**
     * GET to get specific Batman movies from omdbapi
     * @param {string} imdbID
     * @return {object}
     */
     
    const movieMetaDataApi = this.omdbApi + `?i=${imdbID}` + `&apikey=` + `${this.apiKey}`;
    return this.http.get(movieMetaDataApi);
  };

}
