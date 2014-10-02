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
    if(typeof analytics !== "undefined") { analytics.trackView("Список событий"); }
})

.controller('EventDetailCtrl', function($scope, $stateParams, $http) {

    $http.get("http://fortekst.ru/rest/rest_events.php?callback=JSONP_CALLBACK").success(function(data, status, headers, config) {
        $scope.event = data[$stateParams.enventId];
    });

    $scope.send_form = function() {
        var some = {
            'name': 'Максим'
        };
        $http.get("http://fortekst.ru/rest/mailer.php?email='1@1.ru&name='Максим'&theme='Тема такая-то'").success(function(data, status, headers) {
            alert('Спасибо, ваша заявка отправлена!')
        })
        $scope.form_sent = true;
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
        var error = false;
        if ($scope.form_name == '') {
            error = true;

        }
        if ($scope.form_email == '') {
            error = true;
        }
        if ($scope.form_phone == '') {
            error = true;
        }
        if (error == false) {
            $scope.form_sent = true;
        }
    };
})

.controller('AboutCtrl', function($scope) {})

.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
})