angular
  .module('mainApp')
    .config(function($mdIconProvider) {
        $mdIconProvider
            .iconSet("call", 'assets/iconsets/communication-icons.svg', 24)
            .iconSet("social", 'assets/iconsets/social-icons.svg', 24);
    })
    .controller('PositionDemoCtrl', function DemoCtrl($mdDialog) {
        var originatorEv;
        this.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };
        this.announceClick = function(index) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('You clicked!')
                    .textContent('You clicked the menu item at index ' + index)
                    .ok('Nice')
                    .targetEvent(originatorEv)
            );
            originatorEv = null;
        };
    });




/**
http://www.tutorialspoint.com/angular_material/angular_material_cards.htm
https://material.angularjs.org/latest/demo/menu'
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/
