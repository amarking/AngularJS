/**
 * Created by atikore on 7/27/2015.
 */
var myApp=angular.module("myApp",['ngRoute']);

    myApp.config(function($routeProvider) {
        $routeProvider.when('/',{ controller: 'myController', templateUrl: '../template/home.html' })
                      .when('/index',{ controller: 'myController', templateUrl: '../template/home.html'})
                      .when('/checkout',{ controller: 'checkout', templateUrl: '../template/checkout.html'});

    });




