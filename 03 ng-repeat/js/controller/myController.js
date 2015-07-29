/**
 * Created by atikore on 7/27/2015.
 */
myApp.controller("myController",function($scope,myService) {


      var callback=function(data) {
          $scope.categories = data;

          $scope.checked = [];

          $scope.filterMy = function (value) {
              return($scope.checked.indexOf(value.name) == -1);
          };
          $scope.show = function (value) {
              $scope.index = $scope.checked.indexOf(value);
              if ($scope.index != -1) {
                  $scope.checked.splice($scope.index, 1);
              }
              else
                  $scope.checked.push(value);


          };
          $scope.sortWord = "price";
          $scope.sortAccending = function () {
              $scope.sortWord = "price";
          };

          $scope.sortDecending = function () {
              $scope.sortWord = "-price";
          }

      };
        myService(callback);
    }


);
