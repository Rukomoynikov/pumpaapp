angular.module('starter.controllers', ['ionic'])

.run(function($ionicPlatform, $ionicPopup) {
    $ionicPlatform.ready(function() {
        if (window.Connection) {
            if (navigator.connection.type == Connection.NONE) {
                $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device."
                    })
                    .then(function(result) {
                        if (!result) {
                            ionic.Platform.exitApp();
                        }
                    });
            }
        }
    });
})



.controller('CollectionCtrl', function($scope, $http) {

})

.controller('EventsCtrl', function($scope, $http) {
    $http.get("http://fortekst.ru/rest/rest_events.php?callback=JSONP_CALLBACK").success(function(data, status, headers, config) {
        $scope.events = data;
    });
})

.controller('EventDetailCtrl', function($scope, $stateParams, $http) {

    $http.get("http://fortekst.ru/rest/rest_events.php?callback=JSONP_CALLBACK").success(function(data, status, headers, config) {
        $scope.event = data[$stateParams.enventId];
    });

    $scope.send_form = function() {
        var form = {
            'name' : form_name.value,
            'email' : form_email.value,
            'phone' : form_phone.value,
        }

        $http({
            url : 'http://fortekst.ru/rest/mailer.php',
            method : 'POST',
            data : 'Сообщение=' + form.name + ' ' + form.email + ' ' + form.phone,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response){
        },function(response){
        });
    };
})

.controller('SalesCtrl', function($scope, $http) {
    $http.get("http://fortekst.ru/rest/rest_sales.php?callback=JSONP_CALLBACK").success(function(data, status, headers, config) {
        $scope.sales = data;
    });
})

.controller('SaleDetailCtrl', function($scope, $stateParams, $http) {

    $http.get("http://fortekst.ru/rest/rest_sales.php?callback=JSONP_CALLBACK").success(function(data, status, headers, config) {
        $scope.sale = data[$stateParams.saleId];
    });

    $scope.send_form = function() {
        var form = {
            'name' : form_name.value,
            'email' : form_email.value,
            'phone' : form_phone.value,
        }

        $http({
            url : 'http://fortekst.ru/rest/mailer.php',
            method : 'POST',
            data : 'Сообщение=' + form.name + ' ' + form.email + ' ' + form.phone,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response){
        },function(response){
        });
    };
})

.controller('AboutCtrl', function($scope) {})

    $scope.send_form = function() {
        var form = {
            'name' : form_name.value,
            'email' : form_email.value,
            'text' : form_text.value,
        }

        $http({
            url : 'http://fortekst.ru/rest/mailer.php',
            method : 'POST',
            data : 'Сообщение=' + form.name + ' ' + form.email + ' ' + form.phone,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response){
        },function(response){
        });
    };

.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };

})