/**
 * Created by 10769 on 2017/2/21.
 */
;(function (window) {
    angular.module('myApp')
        .controller('jobDescription', function ($scope,$location, searchType, artService) {
        // 获取id
            $scope.id = $location.search().id;
            artService.getNewJobList().then(function (d) {
                $scope.jobdata = d.data.data;
                angular.forEach($scope.jobdata, function (a) {
                    (a.id==$scope.id)?($scope.mes =a):"";
                });
              /*  $scope.arr=($scope.mes.requisite).split('；');
                console.log($scope.arr);*/
            })
        })

})(window);
