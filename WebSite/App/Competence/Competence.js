function CompetenceController($scope, $state) {
    $scope.Menu.Change(2);


    var defaultCompetence = $state.params.refCompetence;
    var defaultSwitch = $state.params.refSwitch;
    $scope.IsTechnique = false;
    var etatAccordeons = new Array();
    etatAccordeons["AngularJS"] = false;
    etatAccordeons["Adaptabilite"] = false;



    var goTo = function (nomPage) {
        var nomAccordeon = '#collapse' + nomPage;
        if (etatAccordeons[nomPage] == true) {
            // Fermer accordeon
            $(nomAccordeon).collapse('hide');
        } else {
            // Ouvrir accordeon
            $(nomAccordeon).collapse('show');
        }

        etatAccordeons[nomPage] = !etatAccordeons[nomPage];
    };

    if (defaultSwitch != undefined && defaultSwitch != null) {
        $scope.IsTechnique = defaultSwitch == 'T';

        if (defaultCompetence != undefined && defaultCompetence != null) {
            setTimeout(function () { goTo(defaultSwitch + defaultCompetence); }, 1000);
        }
    }
    $scope.GoTo = goTo;
    $scope.EtatAccordeons = etatAccordeons;
    // Pour gérer la courbe des notes
    $scope.Techniques = {};
    $scope.Techniques.AngularJS = {};
    $scope.Techniques.AngularJS.Graphe = {};
    $scope.Techniques.AngularJS.Graphe.options = {
        chart: {
            type: 'bulletChart',
            duration: 500
        }
    };

    $scope.Techniques.AngularJS.Graphe.data = {
        "ranges": [0, 8, 10],
        "measures": [8],
        "markers": [8]
    }
}
