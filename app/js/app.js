
    angular
        .module('mainApp', [
            'ngRoute',
            'ngMaterial',
            'ngAnimate',
            'ngMessages',
            'ngMdIcons',
            'material.svgAssetsCache',
            'menu'
        ])

        .run(function(){
            console.log('App is ready!!!!!!');
        });
