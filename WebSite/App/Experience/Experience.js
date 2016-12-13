function ExperienceController($scope, $state) {
    $scope.Menu.Change(1);
    var defaultProjet = $state.params.refExperience;
    var etatAccordeons = new Array();
    etatAccordeons["VueFrais"] = false;
    
    var goTo = function (nomPage) {
        if (etatAccordeons[nomPage] == true) {
            // Fermer accordeon
            $('#collapse' + nomPage).collapse('hide');
        } else {
            // Ouvrir accordeon
            $('#collapse' + nomPage).collapse('show');
        }

        etatAccordeons[nomPage] = !etatAccordeons[nomPage];
    };

    if (defaultProjet != undefined && defaultProjet != null) {
        setTimeout(function () { goTo(defaultProjet); }, 1000);
    }

    $scope.GoTo = goTo;
    $scope.EtatAccordeons = etatAccordeons;

/*var items = [
    getExperience1(),
    getExperience2()
];

var Experiences = {};
Experiences.Items = items;
Experiences.DefaultProject = $state.params.refExperience;
$scope.Experiences = Experiences;
$scope.goCompetence = function (refSwitch, index) { $state.go("Competence.detail", { refSwitch: refSwitch, refCompetence: index }); };*/
}