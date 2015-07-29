/**
 * Created by atikore on 7/28/2015.
 */
myApp.service('myService',function($http,$q){

    return function()
    {

        var deferred = $q.defer();
        $http.get("../js/products.json").
            success(function (data, status) {
                deferred.resolve(data);

            }).
            error(function (data, status) {
                deferred.reject(status);
            });
        return deferred.promise;
    }

})