/**
 * Created by chenshanghuan on 2017/2/22.
 */
angular.module('myApp').config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when("", "/welcome");

    $stateProvider
        .state("welcome", {
            url: "/welcome",
            templateUrl: "welcome.html",
            controller:'',
            resolve:{
                load:["$ocLazyLoad",function($ocLazyLoad){
                 return $ocLazyLoad.load([
                     '../css/welcome.css'
                 ])
                }]
            }
        })
        .state("companyList", {
            url: "/companyList",
            templateUrl: "companyList.html",
            resolve:{
                load:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        '../css/companyList.css',
                        '../js/controller/companyList.js'
                    ])
                }]
            }
        })
        .state("jobList", {
            url: "/jobList",
            templateUrl: "jobList.html"
        })
        .state("articleList", {
            url: "/articleList",
            templateUrl: "articleList.html"
        })
        .state("modelManage", {
            url: "/modelManage",
            templateUrl: "modelManage.html"
        })
        .state("roleManage", {
            url: "/roleManage",
            templateUrl: "roleManage.html"
        })
        .state("passwordModify", {
            url: "/passwordModify",
            templateUrl: "passwordModify.html"
        })
        .state("countManage", {
            url: "/countManage",
            templateUrl: "countManage.html"
        });


})
/*angular.module('myApp').controller('mainCtrl', function ($scope) {
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
    $scope.name=111;

})*/
