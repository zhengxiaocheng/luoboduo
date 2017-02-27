/**
 * Created by 10769 on 2017/2/24.
 */
angular.module('myApp').factory("commonUtil", function () {
        return {
            // 下拉菜单
            select : function (d) {
                var arr=[];
                d.forEach(function (data) {
                    arr.push(data.name);

                });
                return arr;
            }
        };
    }
);