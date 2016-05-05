angular
  .module('mainApp')
    .config(function($mdIconProvider) {
        $mdIconProvider
            .iconSet("call", 'assets/iconsets/communication-icons.svg', 24)
            .iconSet("social", 'assets/iconsets/social-icons.svg', 24)
            .defaultIconSet('img/icons/sets/core-icons.svg', 24);
    })

    .controller('MenuCtrl', function MenuCtrl($mdDialog) {

    });











/**
http://www.tutorialspoint.com/angular_material/angular_material_cards.htm
https://material.angularjs.org/latest/demo/menu'
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/
