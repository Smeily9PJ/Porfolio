function CompetenceController($scope, $state) {
    $scope.Menu.Change(2);

    // Variable indiquant le type de compétences à afficher
    $scope.IsTechnique = false;

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
        "ranges": [0,8,10],
        "measures": [8],
        "markers": [8]
    }
}
