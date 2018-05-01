'use strict';

let app = angular.module('MovieWatchlist');

app.factory('MovieFactory', function ($http) {
  return {
    searchApiMovies(keyword) {
      return $http.get(`/movies?keyword=${keyword}`);
    }
  };
});