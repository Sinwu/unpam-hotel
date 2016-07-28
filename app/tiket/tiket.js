'use strict';

angular.module('myApp.tiket', ['ngRoute', 'ngMaterial', 'md-steppers'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tiket', {
    templateUrl: 'tiket/tiket.html',
    controller: 'TiketController'
  });
}])

.controller('TiketController', ['$scope', function(sc) {
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


    sc.hitung = function() {
    	var biayaKelas = sc.kelas.multi

    	alert(biayaKelas)
    }
}]);