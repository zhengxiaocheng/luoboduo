/**
 * Created by 10769 on 2017/2/15.
 */

;(function () {
    angular.module('myApp')
        .controller('jobList', function ($scope, $location, searchOptions, artService, searchSelect) {
            // 获取url的参数,来判断是推荐页还是最新职位页
            $scope.url = $location.search().bol;
            //获取本地数据
            $scope.options= searchSelect.getLocalStorage( localStorage.jobOptions,searchOptions.options);
            // 选中值判断，放到_params作为参数请求数据
            console.log('11',$scope.options );
            //多选，单选
            $scope.bradioType = searchSelect.radioType;
            $scope.MultiSelect = searchSelect.MultiSelect;
            // jobKeyword初始化
            $scope.jobKeyword = "";
            // 三个推荐职位
            artService.getRecJob()
                .then(function (d) {
                        $scope.jobs3 = d.data.data;
                    }
                );
            // 根据url判断是请求哪个数据
            ($scope.search = function () {
                // 选择结果存储本地
                localStorage.jobOptions = JSON.stringify($scope.options);
                console.log('11',$scope.options );
                $scope._params = {};
                angular.forEach($scope.options, function (data) {
                    $scope._params[data.name] = searchSelect.classifyData(data.value);
                });
                $scope._params.name = $scope.jobKeyword;
                console.log($scope._params);
                artService.getNewJobList($scope._params).then(function (d) {

                    $scope.newjobs = d.data.data;
                })
            })();

            // 清空数组
            $scope.clearJob=function () {
                // 删除存储本地的搜索数据
                localStorage.removeItem("jobOptions");
                $scope.options= angular.copy(searchOptions.options);
                $scope.search();
            }
        })
})(window);

