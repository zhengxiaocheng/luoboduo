/**
 * Created by 10769 on 2017/2/13.
 */
angular.module('myApp')
//定义项目所需要的所有服务
    .service('artService', function ($http) {
        this.getArticle = function () {
            return $http.get("/carrots-ajax/a/article/search?type=1");
        };
        // 获取最新8位职位信息
        this.getNewJob = function (d) {
            return $http.get("/carrots-ajax/a/profession/search?recommend=0&size=8",
                {params:d}
            )
        };
        // 获取8位推荐职位信息
        this.getRecommendJob = function (d) {
            return $http.get("/carrots-ajax/a/profession/search?recommend=1&size=8",
                {params:d}
            )
        };
        // 获取3位推荐职位信息
        this.getRecJob = function () {
            return $http.get("/carrots-ajax/a/profession/search?recommend=1&size=3"
            )
        };
        // 获取推荐职位信息
        this.getRecommendJobList = function (d) {
            return $http.get("/carrots-ajax/a/profession/search?recommend=1",
                {params:d}
            )
        };
        // 获取最新职位信息
        this.getNewJobList = function (d) {
            return $http.get("/carrots-ajax/a/profession/search?recommend=0",
                {params:d}
            )
        };
        //获取公司信息
        this.getCompany = function (d) {
            return $http.get("/carrots-ajax/a/company/search",
                {params: d}
            );

        };
        //首页banner大图
        this.getBannerPic = function () {
            return $http.get("/carrots-ajax/a/article/search?type=0");
        };
        // 获取更多公司信息
        this.getCompanyMeg=function(){
            return $http.get("/carrots-ajax/a/profession/search")
        };
        //获取精英页banner
        this.getEliteList=function(){
            return $http.get("/carrots-ajax/a/article/search?type=2")
        }
    });

