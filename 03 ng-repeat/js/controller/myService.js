/**
 * Created by ibastapu on 5/25/2015.
 */

'use strict'
myApp.factory('myService',function($http)
    {
        alert("In Service");
        return{
            getFormDetails:function(data)
            {
                console.log(data);
                $http.post("../../04%20services/data/products.json", data).
                    success(function (data, status, headers, config) {
                        console.log("Data sent SuccessFully")
                    }).
                    error(function (data, status, headers, config) {
                        console.log("Not able to send data")
                    });
            }
        }


    }
);