'use strict';

app.controller('MovieCtrl', function ($scope, MovieFactory) {
  MovieFactory.searchApiMoves('batman').then(movies => {
    $scope.movieList = movies.data;
  });
});