(function(){
    angular
      .module('mainApp')
      .config(config);
    function config($routeProvider) {
        $routeProvider
              .when('/', {
                templateUrl: 'views/homepage.html',
                conrtroller: 'HomeController',
                controllerAs: 'vm'
              })
              .when('/autocomplete',{
                  templateUrl: 'views/autocomplete.html',
                  controller: 'autoCompleteController',
                  controllerAs: 'vm'
              })
              .when('/bottomsheet',{
                  templateUrl: 'views/bottomsheet.html',
                  controller: 'bottomSheetController',
                  controllerAs: 'vm'
              })
              .when('/cards', {
                templateUrl: 'views/cards.html',
                controller: 'cardController'
              })
              .when('/registration', {
                templateUrl: 'views/registration.html',
                controller: 'RegistrationController',
                controlleras: 'vm'
              })
                .otherwise({
                    redirectTo: '/'
              });

    }
})();
