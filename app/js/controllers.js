'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MoviesCtrl', ['$scope', '$firebase', function($scope, $firebase) {
    var moviesRef = new Firebase("https://burning-fire-1297.firebaseio.com/movies");
    var url = "https://burning-fire-1297.firebaseio.com/movies/"
    $scope.movies = $firebase(moviesRef);

    $scope.addMovie = function() {
      var timestamp = new Date().valueOf()
      var itemRef = new Firebase(url + timestamp);
      $firebase(itemRef).$set({id: timestamp, title: $scope.movieTitle, year: $scope.movieYear, director: $scope.movieDirector, awards: $scope.movieAwards, watched:false});
      $scope.movieTitle = '';
      $scope.movieYear = '';
      $scope.movieDirector = '';
      $scope.movieAwards = '';
    };

    $scope.link = function(movie) {
      var movieRef = new Firebase("https://burning-fire-1297.firebaseio.com/movies/" + movie.id)
      $firebase(movieRef).$update({rate: $scope.rate});
      var link = "http://www.rottentomatoes.com/m/" + movie.title.split(' ').join('_')
    };

  }])

  .controller('RatingCtrl', ['$scope', '$firebase', function($scope, $firebase) {
    var moviesRef = new Firebase("https://burning-fire-1297.firebaseio.com/movies");
    $scope.movies = $firebase(moviesRef);

    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.addRating = function(movie) {
      var movieRef = new Firebase("https://burning-fire-1297.firebaseio.com/movies/" + movie.id)
      var promise = $firebase(movieRef).$update({rate: movie.rate});
    };

    $scope.watched = function(movie) {
      // THIS NEEDS TO BE DRIED UP
      var movieRef = new Firebase("https://burning-fire-1297.firebaseio.com/movies/" + movie.id)
      var promise = $firebase(movieRef).$update({watched: !movie.watched});
    };

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
    };

    $scope.ratingStates = [
      {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    ];
  }
  ]);
