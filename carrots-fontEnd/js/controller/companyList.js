/**
 * Created by chenshanghuan on 2017/2/23.
 */
angular.module('myApp').controller("companyListCtrl", ['$scope', 'appService', 'companyList', 'PROVINCE', 'CITY', 'COUNTY', function ($scope, appService, companyList, PROVINCE, CITY, COUNTY) {
    $scope.currentPage = 1;
    $scope.perPage = 10;
    $scope.pageNum = 1;
    //公司行业
    $scope.Industry = companyList.industry;
    //冻结状态
    $scope.Freezed = companyList.freezed;
    //融资规模
    $scope.Financing = companyList.financing;
    //认证状态
    $scope.Approved = companyList.approved;


    $scope.myArr = PROVINCE;

    $scope.province = [];
    angular.forEach(PROVINCE, function (data) {
        $scope.province.push(data.ProName);
    })


    var param = {page: $scope.currentPage, size: $scope.perPage};

//分页器

    appService.getArticle(param).then(
        function (resp) {
            $scope.companyList = resp.data.data;
            $scope.totalItems = resp.data.total;
            $scope.pageChanged = function () {
                param = {page: $scope.currentPage, size: $scope.perPage}
                appService.getArticle(param).then(function (res) {
                    $scope.companyList = res.data.data;
                })
            };
            $scope.pageChangedTxt = function () {
                $scope.currentPage = 1;
                param = {page: $scope.currentPage, size: $scope.perPage}
                appService.getArticle(param).then(function (res) {
                    $scope.companyList = res.data.data;
                })
            };
            $scope.goPage = function () {
                $scope.currentPage = $scope.pageNum;
                param = {page: $scope.currentPage, size: $scope.perPage}
                appService.getArticle(param).then(function (res) {
                    $scope.companyList = res.data.data;

                })
            }
        }
    );

    $scope.CityArr = [];
    $scope.select = function () {
        console.log($scope.selectedPro);
        //当重新选择省份时，把市和区县先清空
        $scope.CityArr = [];
        $scope.CountyArr = [];
        //当常量省的ProID和市的常量的ProID相等时，把数据放在市的数组中

        angular.forEach(CITY, function (data) {
            if ($scope.selectedPro == data.ProID) {
                $scope.CityArr.push(data);
            }
            return $scope.CityArr;
        })


    }

    $scope.CountyArr = [];
    $scope.selectTwo = function () {
        //当重新选择市的时候，把区先清空
        $scope.CountyArr = [];
        if ($scope.selectedCity != null) {
            angular.forEach(COUNTY, function (data) {
                if ($scope.selectedCity == data.CityID) {
                    console.log($scope.selectedCity);
                    $scope.CountyArr.push(data);
                }
                return $scope.CountyArr;
            });
            console.log($scope.CountyArr);
        }


    }

    //搜索
    //此处一定要注意了，所有的数据已经是双向绑定了，不需要再使用ng-change事件来实现数据变化
    $scope.searchCom = function () {
        var param = {
            name: $scope.companyName,/*$scope.companyName不能用引号引起来*/
            product: $scope.productName,
            industry: $scope.selectedOne,
            freezed: $scope.selectedTwo,
            financing: $scope.selectedThree,
            approved: $scope.selectedFour,
            province: $scope.selectedPro,
            city: $scope.selectedCity,
            county: $scope.selectedCounty,
            page: $scope.currentPage,
            size: $scope.perPage
        };
        appService.getArticle(param).then(function(res){
            $scope.companyList = res.data.data;
            console.log($scope.companyList);
        })

    }
    //清空
    $scope.clearCom=function(){
       var param={};
        appService.getArticle(param).then(function(res){
            $scope.companyList = res.data.data;
            console.log($scope.companyList);
        })

    }

}]);


