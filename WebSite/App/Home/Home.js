function HomeController($scope, $state) {
    $scope.Menu.Change(0);

    $scope.goFavoryProject = function () { $state.go("Experience.detail", { refExperience: 'TIME' }); };
}
