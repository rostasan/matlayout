(function(){
    angular
      .module('mainApp')
      .config(config);
    function config($routeProvider) {
        $routeProvider
              .when('/', {
                templateUrl: 'view/homepage.html',
                conrtroller: 'HomeController',
                controllerAs: 'vm'
              })
              .when('/autocomplete',{
                  templateUrl: 'view/autocomplete.html',
                  controller: 'autoCompleteController',
                  controllerAs: 'vm'
              })
              .when('/bottomsheet',{
                  templateUrl: 'view/bottomsheet.html',
                  controller: 'bottomSheetController',
                  controllerAs: 'vm'
              })
              .when('/cards', {
                templateUrl: 'view/cards.html',
                controller: 'cardController'
              })

    }
})();
