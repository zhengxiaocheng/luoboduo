/**
 * Created by chenshanghuan on 2017/2/23.
 */
angular.module("myApp").filter('myFilter',function(companyList){
   return function(value,name){
       if (value!= undefined ){
           angular.forEach(companyList[name],function(data){
               if(value==data.id){
                   value=data.name
               }
           })
           return value;
       }


   }
});

angular.module('myApp')
    .filter('provinceFilter', function (PROVINCE) {
        return function (id) {
            if (id != undefined && id != '') {

                var name;
                angular.forEach(PROVINCE, function (data) {

                    if (data.ProID == id) {
                        name = data.ProName;
                    }

                });
                return name;
            }
        }
    });
angular.module('myApp')
    .filter('cityFilter', function (CITY) {
        return function (id) {
            if (id != undefined && id != '') {
                var name;
                angular.forEach(CITY, function (data) {

                    if (data.CityID == id) {
                        name = data.CityName;
                    }

                });
                return name;
            }
        }
    });
angular.module('myApp')
    .filter('countyFilter', function (COUNTY) {
        return function (id) {
            if (id != undefined && id != '') {

                var name;
                angular.forEach(COUNTY, function (data) {

                    if (data.Id == id) {
                        name = data.countyName;
                    }

                });
                return name;

            }
        }
    });