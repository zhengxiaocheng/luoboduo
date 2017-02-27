/**
 * Created by 10769 on 2017/2/17.
 */
;(function (window) {
    angular.module('myApp')
        .factory('searchSelect', function () {
            return {
//搜索多选,同时将当前值赋值给参数
                MultiSelect: function (ind, arr) {
                    if (ind === 0) {
                        arr.forEach(function (index) {
                            index.choose = false;
                        });
                        arr[0].choose = true;
                    } else {
                        arr[ind].choose = !arr[ind].choose;
                        arr[0].choose = false;
                        //全不选直接跳到不限
                    }
                    if (arr.every(function (index) {
                            //console.log(index);
                            return ( index.choose == false)
                        })) {
                        arr[0].choose = !arr[0].choose;
                    }


                },
                //搜索单选
                radioType: function (ind, arr) {
                    arr[ind].choose = !arr[ind].choose;
                    arr.forEach(function (item, index) {
                        if (index !== ind) {
                            item.choose = false
                        }
                        else if (arr.every(function (item) {
                                return item.choose == false
                            })) {
                            arr[0].choose = true;
                        }
                    })
                },
                //选中搜索的条件数据
                classifyData: function (data) {
                    //转换为字符串
                    var _params=[];
                    for (var num = 1; num < data.length; num++) {
                        if (data[num].choose === true) {
                            _params.push(num);
                        }
                    }

                    _params = _params.join(",");
                    return _params;
                },
                // 获取存储数据
                getLocalStorage: function (judge, data) {
                    var dataCopy = angular.copy(data);
                    if (judge ==undefined) {
                        var option = dataCopy;
                    } else {
                        option = JSON.parse(judge);
                    }
                    return option;
                }
            }
        })

})(window);
