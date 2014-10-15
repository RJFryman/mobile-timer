(function(){
  'use strict';

  angular.module('rjf-timer')
  .controller('MainCtrl',['$scope','$interval', function($scope, $interval){
    $scope.clock = 120;
    var timer;

    function reduceTime(){
      $scope.clock -= 1;

      if($scope.clock <= 0){
        $interval.cancel(timer);
      }
    }

    $scope.start = function(){
      timer = $interval(reduceTime, 1000);
    };
  }]);
})();
