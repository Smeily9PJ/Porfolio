function HomeController($scope, $state) {

    $scope.goFavoryProject = function () { $state.go("Experience.detail", { refExperience: '1' }); };
}
