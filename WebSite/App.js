

(function () {
    'use strict';

    // Init Angular
    angular.module('app', ['ui.router', 'nvd3'])
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