function HomeController($scope, $state) {
    $scope.Menu.Change(0);

    TweenLite.set('#picContainer', { transformStyle: "preserve-3d", perspective: 800 });
    TweenLite.set('#pic02', { opacity: 1, rotationY: 0 });

    o = false;
    $scope.Rotate = function () {
        if (o == true) {
            TweenLite.to('#pic01', 1, { opacity: 0, rotationY: 90 });
            TweenLite.to('#pic02', 1, { opacity: 1, rotationY: 0 });
            TweenLite.set('#pic02', { opacity: 0, rotationY: -90});

        } else {
            TweenLite.to('#pic02', 1, { opacity: 0, rotationY: 90 });
            TweenLite.to('#pic01', 1, { opacity: 1, rotationY: 0 });
            TweenLite.set('#pic01', { opacity: 0, rotationY: -90 });
        }
        o = !o;
    };

    $scope.goFavoryProject = function () { $state.go("Experience.detail", { refSwitch: 'P', refExperience: 'TIME' }); };
}