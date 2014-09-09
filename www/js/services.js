angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Events', function($http) {

  var events;
  $http.get("http://fortekst.ru/rest/rest_events.php?callback=JSONP_CALLBACK").success(function(data, status, headers, config){
    events = data;
  });

  return {
    all: function() {
      return events;
    },
    get: function(eventId) {
      return events[eventId];
    }
  }
})

.factory('Sales', function($http) {

  var sales;
  $http.get("http://fortekst.ru/rest/rest_sales.php?callback=JSONP_CALLBACK").success(function(data, status, headers, config){
    sales = data;
  });

  return {
    all: function() {
      return sales;
    },
    get: function(saleId) {
      return sales[saleId];
    }
  }
})
;
