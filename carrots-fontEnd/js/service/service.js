/**
 * Created by chenshanghuan on 2017/2/23.
 */

angular.module('myApp').service('appService', function ($http){
    this.getArticle = function (aa) {
        return $http.get("/carrots-admin-ajax/a/company/search",{params:aa});
    }

})
