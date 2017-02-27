/**
 * Created by chenshanghuan on 2017/2/22.
 */

angular.module('myApp').controller('mainCtrl', function ($scope) {
    $scope.oneAtATime = true;
    $scope.status = {
        isFirstOpen: false,
    };
    $scope.statusTwo = {
        isFirstOpen: false,
    };
    $scope.statusThree = {
        isFirstOpen: false,
    };

})
