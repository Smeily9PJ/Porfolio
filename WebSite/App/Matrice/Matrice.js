function MatriceController($scope, $state) {
    var projets = [{
        Nom: "TIME",
        Lien: "TIME"
    }, {
        Nom: "Pacte d'engagement",
        Lien: "PacteEngagement"
    }, {
        Nom: "Vue Frais",
        Lien: "VueFrais"
    }, {
        Nom: "TRAVAUX",
        Lien: "TRAVAUX"
    }, {
        Nom: "MGM",
        Lien: "MGM"
    }, {
        Nom: "EVERSUITE",
        Lien: "EVERSUITE"
    }, {
        Nom: "Gestion des tags",
        Lien: "GestionTags"
    }, {
        Nom: "Meeting Tracker",
        Lien: "MeetingTracker"
    }, {
        Nom: "Check your SMILE",
        Lien: "CheckYourSMILE"
    }
    ];

    var competencesHumaines = [{
        Nom: "Adaptabilité",
        Lien: "Adaptabilite",
        Type: 'H'
    }, {
        Nom: "Autonomie",
        Lien: "Autonomie",
        Type: 'H'
    }, {
        Nom: "Curiosité",
        Lien: "Curiosite",
        Type: 'H'
    }, {
        Nom: "Patience",
        Lien: "Patience",
        Type: 'H'
    }, {
        Nom: "Sérieux",
        Lien: "Serieux",
        Type: 'H'
    }, {
        Nom: "Sociabilité",
        Lien: "Sociabilite",
        Type: 'H'
    }, {
        Nom: "t1",
        Lien: "t1",
        Type: 'H'
    }, {
        Nom: "t2",
        Lien: "t2",
        Type: 'H'
    }, {
        Nom: "t3",
        Lien: "t3",
        Type: 'H'
    }
    ];

    var contenu = [
        [1, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0]
    ];

    $scope.Projets = projets;
    $scope.CompetencesHumaines = competencesHumaines;
    $scope.Contenu = contenu;


    $scope.GoCompetence = function (type, refCompetence) { $state.go("Competence.detail", { refSwitch: type, refCompetence: refCompetence }); };
    $scope.GoProjet = function (refProjet) { $state.go("Experience.detail", { refExperience: refProjet }); };
}