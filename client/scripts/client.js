var myApp = angular.module('myApp', ['ngMaterial']);

myApp.controller('MainController', [function () {
  var self = this;
  self.myDate = new Date();
  console.log(self.currentDate);

  self.minDate = new Date(
    self.myDate.getFullYear(),
    self.myDate.getMonth() - 1,
    self.myDate.getDate()
  );

  self.maxDate = new Date(
    self.myDate.getFullYear(),
    self.myDate.getMonth() + 1,
    self.myDate.getDate()
  );

  self.onlyMonToThursPredicate = function(date) {
    var day = date.getDay();
    return day === 1 || day === 2 || day === 3 || day === 4;
  };

}]);
