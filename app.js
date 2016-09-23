var directiveMadness = angular.module('directiveMadness', []);

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
    scope: {formValue: "="},
    // link: function(scope) {
    //   scope.formValue = 2;
    // }
  }
})