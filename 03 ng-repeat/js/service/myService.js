/**
 * Created by atikore on 7/28/2015.
 */
myApp.service('myService',function($http){

    return function(cb)
        {
           // console.log(data);
            $http.get("../js/products.json").
                success(function (data, status) {
                    console.log("hi");
                cb(data);
                }).
                error(function (data, status) {
                    console.log("bye");
                });
        }

})