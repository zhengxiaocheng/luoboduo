/**
 * Created by 10769 on 2017/2/20.
 */
;(function (window) {
    angular.module('myApp')
        .controller('searchMain', function ($scope) {
            $scope.searchMain = true;
            $scope.changeSearch = function (d) {
                if(d == true) {
                    $scope.searchMain = true;
                }
                else if(d == false){
                    $scope.searchMain = false;
                }
            }
        })

})(window);