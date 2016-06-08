(function () {
    'use strict';

    angular.module('app', ['ui.router'])
    .config(['$controllerProvider',
                  function ($controllerProvider) {
                      $controllerProvider.allowGlobals();
                  }
    ])
    .config(Route)
    .controller('MenuController', MenuController)
    .controller('HomeController', HomeController)
    .controller('CompetenceController', CompetenceController)
    .controller('ExperienceController', ExperienceController)
    .controller('LoisirController', LoisirController)
    .controller('ContactController', ContactController);
})();