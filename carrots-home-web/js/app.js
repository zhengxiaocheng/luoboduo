/**
 * Created by 10769 on 2017/2/13.
 */
;(function (window) {
    // 01.注册一个应用程序的主模块(module方法如果之传入一个参数就不是创建一个新模块)
    window.angular.module('myApp', [ 'ui.router','oc.lazyLoad','ngAnimate','ngSanitize','ui.bootstrap']);
    // //列表模块定义     ,'list','add','mes'
    // window.angular.module("list", []);
    // //add模块定义
    // window.angular.module("add", []);
    // //mes模块定义
    // window.angular.module("mes", []);
})(window);