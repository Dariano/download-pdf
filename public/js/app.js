(function () {
    'use strict';

    angular
        .module('app', [])
        .controller('pdfController', pdfController)

    function pdfController($http) {
        var vm = this;

        vm.download = function () {
            console.log('chamou!')
            $http.get('/pdf', { responseType: 'arraybuffer', 'Content-Type': 'application/pdf' })
                .then(function (res) {
                    var file = new Blob([res.data], { type: 'application/pdf' });
                    var fileURL = URL.createObjectURL(file);
                    open(fileURL)
                    console.log(res);
                })
        }
    }
} ());