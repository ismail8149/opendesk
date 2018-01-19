'use strict';
app.service('itemService',['$q','$http', function ($q, http) {
    const serverUrl = 'http://5a12745f748faa001280a746.mockapi.io/v1/stores/item';

    this.getItems = function () {
        var deferred = $q.defer();
        http.get(serverUrl,{cache:true}).success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }
}]);