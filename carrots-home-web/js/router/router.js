/**
 * Created by 10769 on 2017/2/15.
 */
;(function (window) {
    window.angular.module("myApp")
    // ui-router
        .config(function ($stateProvider, $urlRouterProvider) {
            // $urlRouterProvider.when("", "/PageTab");
            $urlRouterProvider.otherwise('/home')
            $stateProvider
            //首页
                .state("home", {
                    url: "/home",
                    templateUrl: "home.html",
                     controller: 'homeCtrl',
                    resolve: {
                        load: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([

                                '../css/home.css',
                                '../css/common-style.css',
                                '../js/controller/homeCtrl.js'

                            ]);
                        }]
                    }
                })
                //找职位页
                .state("findJob", {
                    url: "/findJob",
                    templateUrl: "findJob.html",
                    controller: 'findJob',
                    resolve: {
                        load: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '../css/home.css',
                                '../css/findJob.css',
                                '../js/services/services.js',
                                '../js/controller/findJob.js',
                                '../css/common-style.css'
                            ]);
                        }]
                    }
                })
                //推荐职位,最新职位页
                .state("jobList", {
                    url: "/jobList",
                    templateUrl: "jobList.html",
                    controller: 'jobList',
                    resolve: {
                        load: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '../css/home.css',
                                '../css/jobList.css',
                                '../js/factory/search.js',
                                '../js/controller/jobListCtrl.js',
                                '../css/common-style.css'
                            ]);
                        }]
                    }
                })

                // 找精英页
                .state("findElite", {
                    url: "/findElite",
                    templateUrl: "findElite.html",
                    controller:'EliteCtrl',
                    resolve: {
                        load: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '../css/home.css',
                                '../css/findElite.css',
                                '../js/services/services.js',
                                '../js/controller/findElite.js',
                                '../css/common-style.css'
                            ]);
                        }]
                    }
                })
                // 关于我们
                .state("aboutUs", {
                    url: "/aboutUs",
                    templateUrl: "aboutUs.html",
                    controller: 'aboutUs',
                    resolve: {
                        load: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                //'../css/home.css',
                                '../css/common-style.css',
                                '../css/home.css',
                                '../css/aboutUs.css',
                                '../js/controller/aboutUs.js'
                            ]);
                        }]
                    }
                })
            //更多合公司
                .state("moreCooperationCom", {
                    url: "/moreCooperationCom",
                    templateUrl: "moreCooperationCom.html",
                    controller: 'moreCooperationCom',
                    controllerAs:'vm',
                    resolve: {
                        load: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                //'../css/home.css',
                                '../css/common-style.css',
                                '../css/moreCooperationCom.css',
                                '../js/services/services.js',
                                '../js/factory/search.js',
                                '../js/controller/moreCooperationCom.js'
                            ]);
                        }]
                    }
                })
                // 职位/公司搜索页面
                .state("searchMain", {
                    url: "/searchMain",
                    templateUrl: "searchMain.html",
                    controller: 'searchMain',
                    resolve: {
                        load: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '../css/home.css',
                                '../css/searchMain.css',
                                '../js/factory/search.js',
                                '../js/controller/searchMain.js'
                            ]);
                        }]
                    }
                })
                //公司搜索
                .state("searchMain.company", {
                    url: "/company",
                    templateUrl: "searchCompany.html",
                    // controller: 'List',
                    resolve: {
                        load: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '../css/home.css',
                                '../css/company.css',
                                '../js/controller/searchCompany.js'
                            ]);
                        }]
                    }
                })
                //职位搜索
                .state("searchMain.job", {
                    url: "/job",
                    templateUrl: "jobList.html",
                    controller: 'jobList',
                    resolve: {
                        load: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '../css/home.css',
                                '../css/jobList.css',
                                '../js/controller/jobListCtrl.js'
                            ]);
                        }]
                    }
                })
                //职业详情
                .state("jobDescription", {
                    url: "/jobDescription?id",
                    templateUrl: "jobDescription.html",
                    controller: 'jobDescription',
                    resolve: {
                        load: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '../css/home.css',
                                '../css/jobDescription.css',
                                '../js/controller/jobDescription.js'
                            ]);
                        }]
                    }
                })


        });

})(window);




