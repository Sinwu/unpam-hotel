'use strict';

angular.module('myApp.tiket', ['ngRoute', 'ngMaterial', 'md-steppers'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tiket', {
    templateUrl: 'tiket/tiket.html',
    controller: 'TiketController'
  });
}])

.controller('TiketController', ['$scope', function(sc) {
    var self = this
    sc.selesaiHitung = false
    sc.biaya = { 'total': 0, 'tujuan': 0, 'bagasi': 0, 'diskon': 0 }
    sc.tujuan = [
    	{'val':0,'txt':'Jakarta','harga':400000},
    	{'val':1,'txt':'Bali','harga':500000},
    	{'val':2,'txt':'Lombok','harga':500000},
    	{'val':3,'txt':'Malang','harga':600000},
    	{'val':4,'txt':'Pekanbaru','harga':500000},
    	{'val':5,'txt':'Padang','harga':600000}
    ];

    sc.bagasi = [
    	{'val':0,'txt':'0 - 15 Kg','harga':50000},
    	{'val':1,'txt':'16 - 30 Kg','harga':100000},
    	{'val':2,'txt':'31 - 50 Kg','harga':150000}
    ];

    sc.tipe = [
    	{'val':0,'txt':'Ekonomi','multi':1},
    	{'val':1,'txt':'Bisnis','multi':1.2},
    	{'val':2,'txt':'First Class','multi':1.5}
    ];

    sc.jumlahPenumpang = function() {
        if(sc.anak && sc.dewasa) {
            var dewasa = sc.dewasa ? sc.dewasa : 0
            var anak = sc.anak ? sc.anak : 0
            return (anak + dewasa) + " orang";
        }
    }

    sc.hariSebelum = function() {
        if(!sc.pergi) return
        return self.selisihTanggal(sc.pergi, new Date()) + " hari"
    }

    self.selisihTanggal = function(endDate, startDate) {
        var timeDiff = Math.abs(endDate - startDate)
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
        return diffDays
    }

    sc.hitung = function() {
        var dewasa = sc.dewasa ? sc.dewasa : 0
        var anak = sc.anak ? sc.anak : 0
        var biayaTiket = sc.kelas.multi * sc.landing.harga

    	sc.biaya.tujuan = ((anak * 0.5) * biayaTiket) + (dewasa * biayaTiket)

        if(self.selisihTanggal(sc.pergi, new Date()) > 7) sc.biaya.diskon = 0.1 * sc.biaya.tujuan

        sc.biaya.bagasi = sc.berat.harga * sc.kelas.multi

        sc.biaya.total = sc.biaya.tujuan + sc.biaya.bagasi - sc.biaya.diskon
        sc.selesaiHitung = true
    }
}]);