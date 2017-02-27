/**
 * Created by 10769 on 2017/2/11.
 */
/*angular.module('myApp', ['ui.bootstrap', 'ngAnimate'])
 .controller('CarouselDemoCtrl', function ($scope) {
 $scope.myInterval = 2000;
 $scope.noWrapSlides = false;
 var slides = $scope.slides = [];
 $scope.addSlide = function () {
 var newWidth = 600 + slides.length + 1;
 slides.push({
 image: 'http://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGArrBBwe94OfEh0bOlAlopvOVPAWe3GEKAgj6ULuupkVhtYZ0pIxzzk5gY59xSWJ95SOIxsbCuJg/1280x800',
 text: 'nsfocus',
 });
 slides.push({
 image: 'http://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGArrBBwe94PqYvguSpXFVwv-URAD3mGBHRgzaceuqqk1BlN5IrcUvxlp8d5t8BX595SOKdq0CMpw/1280x800',
 text: 'nsfocus',
 });
 slides.push({
 image: 'http://cdn.steamcommunity.com/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGArrBBwe94PqUrgrStA1tw6OZBXGTgH0fQ1j-WeOeskQUxYcYuI02hkpgYuNZRW595SOLioa6j6w/1280x800',
 text: 'nsfocus',
 });
 slides.push({
 image: 'http://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGArrBBwe94aqAq0-T4CVtyvLEUV2C1F0jU3mOTfrqqwlM0McZ9cBv0yckdvNxTUJ95SOId8xoS5w/1280x800',
 text: 'nsfocus',
 });
 };
 $scope.addSlide();
 });*/
;(function (window) {
    angular.module('myApp')
        .controller('findJob', function ($scope, searchType, artService) {
            // 获取到分类条件搜索数据
            $scope.searchType = searchType;
            $scope.con_type = "condition";
            $scope.mouseOverThing = function () {
                $scope.con_type = 'condition3';
                console.log($scope.con_type);
            };
            $scope.mouseOverThing2 = function () {
                $scope.con_type = 'condition3';
                console.log($scope.con_type);
            };
            $scope.mouseOutThing2 = function () {
                $scope.con_type = 'condition';
                console.log($scope.con_type);
            };

            // 轮播图
            $scope.myInterval = 3000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            var slides = $scope.slides = [];
            var currIndex = 0;
            $scope.addSlide = function () {
                //获取banner图
                artService.getArticle().then(function (d) {
                    $scope.articleList = d.data.data.articleList;
                    slides.push({
                        image: $scope.articleList[currIndex].img,
                        id: currIndex++
                    });

                });
            };
            for (var i = 0; i < 3; i++) {
                $scope.addSlide();
            }
            /*     $scope.company.less.less = function () {
             $state.go("searchMain", {id: $scope.searchID})
             }*/
        })

        .controller('recommendJob', function ($scope, artService, compensationType) {
            // 常量值引入,薪水切换
            $scope.salary = compensationType;
            //最新职位和推荐职位切换
            $scope.className1 = true;
            $scope.className2 = false;
            //最新职位信息
            artService.getNewJob()
                .then(function (d) {
                        $scope.recJob1 = d.data.data;
                        $scope.recJob = $scope.recJob1;
                    }
                );
// 推荐职位信息
            artService.getRecommendJob()
                .then(function (d) {
                        $scope.recJob2 = d.data.data;
                    }
                );

            $scope.exchangeJob = function (bol) {
                if (bol === undefined || bol === false) {
                    $scope.className2 = $scope.bol;
                    $scope.bol = !$scope.bol;
                    $scope.className1 = $scope.bol;
                }
                if ($scope.className1 == true) {
                    $scope.recJob = $scope.recJob2;
                } else {
                    $scope.recJob = $scope.recJob1;
                }
            };

            $scope.recommend = function () {
                // 推荐职位true，最新职位false
                if ($scope.className1 == false) {
                    window.location = "main.html#/jobList?bol=false";
                } else {
                    window.location = "main.html#/jobList?bol=true";
                }
            }
        })
        .controller('recCompany', function ($scope, artService, compensationType) {
            $scope.noWrapSlides = false;
            $scope.active = 0;
            var slides = $scope.slides = [];
            var currIndex = 0;
            $scope.addSlide = function () {
                //获取公司数据
                var _params = {};
                _params.returnPage = 1;
                artService.getCompany(_params).then(function (d) {
                    $scope.recCompany = d.data;
                    $scope.bannerCompany = d.data.approvedCompanyList;
                    $scope.srcCompany = $scope.recCompany.industryImg.industryImg;
                    slides.push({
                        bCompany: $scope.bannerCompany[currIndex] ,
                        id: currIndex++
                    });

                });
            };
            for (var i = 0; i < 3; i++) {
                $scope.addSlide();
            }


        })

})(window);


