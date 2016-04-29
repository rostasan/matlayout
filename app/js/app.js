
    angular
        .module('mainApp', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngMessages','ngMdIcons','material.svgAssetsCache'])

        .run(function(){
            console.log('App is ready!!!!!!');
        });
