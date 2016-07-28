'use strict';

describe('TiketController', function() {
  beforeEach(module('myApp.tiket'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('sc.guestCount', function() {
    it('has 10 elements of data', function() {
      var $scope = {};
      var controller = $controller('TiketController', { $scope: $scope });
      expect($scope.guestCount().length).toEqual(10);
    });
  });
});