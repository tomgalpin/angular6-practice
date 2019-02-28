# Tom's Angular 6/7 Practice App using OMDB Api:
A simple App using Angular 6/7 and the OMDB Api

## Notes: 
1. Difficulty centered around learning:
  * Learning Angular 6/7 conventions
  * Observables vs. Promises
2. I did not make it responsive.
3. I did not add FE and e2e tests
4. I'm not sure why there was a need to pull all the movie posters locally, as they seemed to work fine when being pulled from OMDB.

## Areas of Improvement:
1. Add testing/learn Jasmine and Karma
2. Add pagination in OMDB call
3. Add search instead of baked in GET
4. Address CSS compiling and npm of `css-reset`, or `css-normalize`

## Guidelines:
1. Display a vertical list of ten movies which can also be filtered by decade.
2. A UI mockup can be found in the included moviemock.sketch file (or moviemock.pdf if you don't have Sketch).
  * Only one movie is shown in the mockup, but use that as a template for the other 9.
3. Using the first 10 results of this api search for batman movies:
  * http://www.omdbapi.com/?s=Batman
4. Take those results and look up details for each movie returned using this api pattern:
  * http://www.omdbapi.com/?i=tt0372784 (where i = the imdb id found above)
5. Images will be blocked from hotlinking. Manually download all of those images to the project first, then reference them locally (parse the url string from the response).
6. Build using Angular.js version [1.5.8] or 2.x/6 and SASS compiled to CSS. Build at least one AngularJS component. Make sure your code is supported by Chrome, FF, and IE11.
7. Publish your completed project to a github repo provide us with a link.

## Structure
    .
    ├── /app            # Primary folder with all work
    │     ├── /models 
    │     │     └── movie.ts
    │     ├── /movies     # movies component
    │     │     ├── movies.component.html
    │     │     ├── movies.component.scss. 
    │     │     └── movies.component.ts.   # most work done here
    │     ├── /styles                      # globally accessible styles
    │     │     ├── css-reset.css     
    │     │     ├── globals.scss
    │     │     └── mixins.scss
    │     ├── app-routing.module.ts       # Routing service
    │     ├── app.component.html
    │     ├── app.component.scss
    │     ├── app.component.ts
    │     ├── app.module.ts               # Parent Angular file
    │     └── movies.service.ts           # API GET service to OMDB Api
    ├── /assets
    │     └── /images
    ├── index.html
    └──  styles.scss


# Angular6MovieApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
