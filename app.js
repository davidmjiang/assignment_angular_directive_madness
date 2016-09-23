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
    scope: {formValue: "@"},
    // link: function(scope) {
    //   scope.formValue = 2;
    // }
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