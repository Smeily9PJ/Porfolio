function Route($stateProvider, $urlRouterProvider) {
    //Set default route
    $urlRouterProvider.otherwise('/');
 
    //Declare states
    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'HTML/home.html',
          controller: 'HomeController',
          controllerAs: 'Home'
      })
      .state('Menu1', {
          url: '/experience',
          templateUrl: 'HTML/Experience.html',
          controller: 'ExperienceController',
          controllerAs: 'Experience'
      })
      .state('Competence', {
          url: '/competence',
          templateUrl: 'HTML/Competence.html',
          controller: 'CompetenceController',
          controllerAs: 'Competence'
      })
      .state('loisir', {
          url: '/loisir',
          templateUrl: 'HTML/Loisir.html',
          controller: 'LoisirController',
          controllerAs: 'Loisir'
      })
      .state('contact', {
          url: '/contact',
          templateUrl: 'HTML/Contact.html',
          controller: 'ContactController',
          controllerAs: 'Contact'
      });
}