'use strict';

describe('TiketController', function() {
  beforeEach(module('myApp.tiket'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('sc.hitung', function() {
    it('dapat menghitung biaya bagasi', function() {
      var $scope = {};
      var controller = $controller('TiketController', { $scope: $scope });

      $scope.dewasa = 1;
      $scope.anak = 1;
      $scope.kelas = { 'multi': 1.5 };
      $scope.landing = { 'harga': 500000 };
      $scope.berat = { 'harga': 50000 };
      controller.selisihTanggal = function(endDate, startDate) { return 1 };

      $scope.hitung();
      expect($scope.biaya.bagasi).toEqual(75000);
    });

    it('dapat menghitung total biaya tiket dengan tiket anak senilai setengah harga asli', function() {
      var $scope = {};
      var controller = $controller('TiketController', { $scope: $scope });

      $scope.dewasa = 1;
      $scope.anak = 1;
      $scope.kelas = { 'multi': 1 };
      $scope.landing = { 'harga': 500000 };
      $scope.berat = { 'harga': 50000 };
      controller.selisihTanggal = function(endDate, startDate) { return 1 };

      $scope.hitung();
      expect($scope.biaya.tujuan).toEqual(750000);
    });

    it('dapat menghitung diskon apabila waktu keberangkatan lebih dari 7 hari setelah booking', function() {
      var $scope = {};
      var controller = $controller('TiketController', { $scope: $scope });

      $scope.dewasa = 1;
      $scope.anak = 1;
      $scope.kelas = { 'multi': 1 };
      $scope.landing = { 'harga': 500000 };
      $scope.berat = { 'harga': 50000 };
      controller.selisihTanggal = function(endDate, startDate) { return 10 };

      $scope.hitung();
      expect($scope.biaya.diskon).toBeGreaterThan(0);
    });

    it('dapat menghitung total biaya tiket dan bagasi berdasarkan jenis multiplier kelas', function() {
      var $scope = {};
      var controller = $controller('TiketController', { $scope: $scope });

      $scope.dewasa = 1;
      $scope.anak = 1;
      $scope.kelas = { 'multi': 1.5 };
      $scope.landing = { 'harga': 500000 };
      $scope.berat = { 'harga': 50000 };
      controller.selisihTanggal = function(endDate, startDate) { return 10 };

      $scope.hitung();
      expect($scope.biaya.total).toEqual(1087500);
    });
  });
});