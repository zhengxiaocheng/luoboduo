/**
 * Created by 10769 on 2017/2/17.
 */
angular.module('myApp').filter('salaryFilter', function (compensationType) {
        return function (d) {
            var out;
            out = compensationType[d].name;
            return out;
        }
    }
)
angular.module('myApp').filter('educationFilter', function (educationtype) {
        return function (d) {
            var out;
            out = educationtype[d].name;
            return out;
        }
    }
)
angular.module('myApp').filter('experienceFilter', function (experiencetype) {
            return function (d) {
                var out;
                out = experiencetype[d].name;
                return out;
            }
        }
    )
angular.module('myApp').filter('provinceFilter', function (provinceType) {
            return function (d) {
                var out;
                out = provinceType[d].name;
                return out;
            }
        }
    )
//分页过滤器
angular.module('myApp').filter('pageFilter',function(){
    return function(obj,star){
        return  obj.slice(star);
   }

})