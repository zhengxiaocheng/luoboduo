/**
 * Created by chenshanghuan on 2017/2/18.
 */
angular.module('myApp').controller("moreCooperationCom",['$scope','artService','companyOptions','searchSelect',function($scope,artService,companyOptions,searchSelect){

    var vm = $scope.vm = {};
    var params={size:9,page:$scope.pageNum};
    $scope.pageNum=1;
    //獲取banner圖
    artService.getEliteList().then(
        function(res){
            $scope.banner=res.data.data.articleList[0].img;
            console.log($scope.banner);
        }
    )
    //要注入常量才能使用外部定義的常量
    $scope.options=companyOptions.options;




    $scope.MultiSelect = searchSelect.MultiSelect;
    vm.pageNum=1;





    //请求公司信息
   artService.getCompany(params).then(function(res){
        $scope.company=res.data.data;
        console.log($scope.company);




        //获取到总的公司数
        $scope.totalItems =res.data.total;
        vm.currentPage=1;

        $scope.pageChanged = function() {
            //当分页器发生改变时，改变请求的页码数，同时重新请求数据渲染页面
            params.page=vm.currentPage;
            artService.getCompany(params).then(function(res){
                $scope.company=res.data.data;
            })
        };
       //用户手动输入改变页码时，改变请求的页码数，同时重新请求数据渲染页面。此处利用了数据的双向绑定，获取了用户输入的值
        $scope.goPage=function(){
            params.page=vm.pageNum;
            artService.getCompany(params).then(function(res){
                $scope.company=res.data.data;
            })
        }


  })
 //用户点击同时触发筛选
$scope.selectUser=function(){
    var arr={};
  angular.forEach(  $scope.options,function(data){
       arr[data.name]=searchSelect.classifyData(data.value);
   })
    console.log(params);
    //合并对象，使参数作为1个新的参数进行请求传参
    params=Object.assign(params,arr);
    console.log(params);
    artService.getCompany(params).then(function(res){
        $scope.company=res.data.data;
        //请求到总数据后给总条数赋值，调整页码
        $scope.totalItems =res.data.total;
    })



}


}])


