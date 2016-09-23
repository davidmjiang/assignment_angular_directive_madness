var directiveMadness = angular.module('directiveMadness', []);

directiveMadness.controller('QuotesCtrl', ['$scope', function($scope) {

  $scope.quotes = [];
  $scope.quote = {};
  $scope.authorError;
  $scope.setErrors = function(form) {
    $scope.authorError = form.author.$error;
  };
  $scope.pushQuoteOntoQuotes = function(form) {
    if(form.$valid){
      $scope.quotes.push($scope.quote);
      $scope.quote = {};
      form.$setPristine();
    }
    else{
      $scope.setErrors(form);
    }
  };
  $scope.deleteQuote = function(quote) {
    var i = $scope.quotes.indexOf(quote);
    $scope.quotes.splice(i, 1);
  }
}]);

directiveMadness.directive('quoteForm', function() {
  return {
    templateUrl: "quoteForm.html",
    restrict: "E",
    scope: true
  }
});


directiveMadness.directive('quotesIndex', function() {
  return {
    templateUrl: "quotesIndex.html",
    restrict: "E",
    scope: true
  }
});

directiveMadness.directive('mainNav', function() {

  return {
    templateUrl: "mainNav.html",
    restrict: "E",
    scope: { hide: "="}
  };
});

directiveMadness.directive('radioForm', function() {

  return {
    templateUrl: "radioForm.html",
    restrict: "E",
    scope: {formValue: "@"},
  }
});

directiveMadness.directive('mainHeader',
  function(){
    return{
      templateUrl: "mainHeader.html",
      restrict: "E",
      transclude: true,
      scope:{}
    }
});

directiveMadness.directive("copyright",
  function(){
    return{
      templateUrl: "copyright.html",
      restrict: "E",
      transclude: true,
      scope: {year: "@"},
      link: function(scope){
        scope.year = new Date().getFullYear();
      }
    }
});

directiveMadness.directive("colorize", function(){
  return{
    restrict: "A",
    scope: {color: "@",
            background: "@"},
    link: function(scope, element, attributes) {
      element.css("color", scope.color)
             .css("background-color", scope.background);
    }
  }
});

directiveMadness.directive("mouseClick", function() {
  return {
    restrict: "A",
    templateUrl: "mouseClick.html",
    scope: { buttonState: "=" },
    link: function(scope, element, attributes) {
      scope.buttonState = { 'direction': 'UP'};
      scope.$watch(scope.buttonState.direction, function(){
        console.log("something");
      });
      element.on("click", function() {
        console.log(scope.buttonState.direction);
          if (scope.buttonState.direction === "DOWN") {
            scope.buttonState.direction = "UP"
          } else {
            scope.buttonState.direction = "DOWN"
          }
          // element.text("Mouse is "+ scope.button.direction);
      });

    }
  }
});

