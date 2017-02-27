/**
 * Created by 10769 on 2017/2/15.
 */
;(function (window) {
    angular.module('myApp')
        .controller('homeCtrl',  function ($scope,artService) {
         artService.getBannerPic().then(
            function (resp) {
                $scope.banner = resp.data.data.articleList[0].img;
            }, function (resp) {
                alert("获取banner图失败");
            }
        );
        artService.getCompanyMeg().then(function (resp) {
            $scope.myInterval = 5000;
            $scope.active = 0;
            var currIndex = 0;
            $scope.company = resp.data.data;
            $scope.slides = [];
            for (var i = 0; i < $scope.company.length; i += 4) {
                $scope.slides.push($scope.company.slice(i, i + 4));
            }
            console.log($scope.slides.length);

        }, function (resp) {

        })
            //



    })
})(window);


