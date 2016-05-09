(function(){
angular
  .module('menu', [])
    .config(function($mdIconProvider) {
        $mdIconProvider
            .iconSet("call", 'assets/iconsets/communication-icons.svg', 24)
            .iconSet("social", 'assets/iconsets/social-icons.svg', 24)
            .defaultIconSet('img/icons/sets/core-icons.svg', 24);
    })

    .controller('MenuCtrl', function MenuCtrl($mdDialog) {

    })


        .config(config);
    function config($routeProvider) {
        $routeProvider
            .when('/bizarre', {
                templateUrl: 'views/partners/bizarre.html',
                conrtroller: '',
                controllerAs: 'vm'
            })
            .when('/event',{
                templateUrl: 'views/partners/event.html',
                controller: '',
                controllerAs: 'vm'
            })
            .when('/marketing',{
                templateUrl: 'views/partners/marketing.html',
                controller: '',
                controllerAs: 'vm'
            })
            .when('/sponsor', {
                templateUrl: 'views/partners/sponsor.html',
                controller: ''
            })
            .when('/vendor', {
                templateUrl: 'views/partners/vendor.html',
                controller: '',
                controlleras: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });

    }
})();







/**
http://www.tutorialspoint.com/angular_material/angular_material_cards.htm
https://material.angularjs.org/latest/demo/menu'
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/
