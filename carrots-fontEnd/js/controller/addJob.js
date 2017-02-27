/**
 * Created by 10769 on 2017/2/25.
 */
angular.module('myApp')
    .controller("addJob",function(appService,$scope,jobConstant,commonUtil,$location) {
        $scope.Recommend=[];
        $scope.Recommend= commonUtil.select(jobConstant.recommend);


    });

