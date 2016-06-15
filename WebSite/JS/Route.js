function Route($stateProvider, $urlRouterProvider) {
    //Set default route
    $urlRouterProvider.otherwise('/');
 
    //Declare states
    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'HTML/home.html',
          controller: HomeController
      })
      .state('Experience', {
          url: '/experience',
          templateUrl: 'HTML/Experience.html',
          controller: ExperienceController
      })
      .state('Experience.detail', {
          url: '/experience/{refExperience}',
          templateUrl: 'HTML/Experience.html',
          controller: ExperienceController
      })
      .state('Competence', {
          url: '/competence',
          templateUrl: 'HTML/Competence.html',
          controller: CompetenceController
      })
      .state('Competence.detail', {
          url: '/competence/{refSwitch}/{refCompetence}',
          templateUrl: 'HTML/Competence.html',
          controller: CompetenceController
      })
      .state('loisir', {
          url: '/loisir',
          templateUrl: 'HTML/Loisir.html',
          controller: LoisirController
      })
      .state('contact', {
          url: '/contact',
          templateUrl: 'HTML/Contact.html',
          controller: ContactController
      });
}