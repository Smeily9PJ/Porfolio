function ExperienceController($scope, $state) {
    $scope.Menu.Change(1);

    var items = [
        getExperience1(),
        getExperience2()
    ];

    var Experiences = {};
    Experiences.Items = items;
    Experiences.DefaultProject = $state.params.refExperience;
    $scope.Experiences = Experiences;
    $scope.goCompetence = function (refSwitch, index) { $state.go("Competence.detail", { refSwitch: refSwitch, refCompetence: index }); };
}

function getExperience1() {
    var index = 0;
    var exp1 = {
        Id: 1,
        MenuActif: 0,
        Name: "Web api : Check your smile",
        Contexte:
            "Projet étudiant, développeur-concepteur, chef d'équipe, but du projet, à quoi il sert",
        Description: "Description des taches que j'ai effectué," +
            "des problèmes rencontrés et des résolutions, des captures d'écrans..."+
            "Le projet a évolué depuis, implémentation de news fonctions pour d'autres étudiants "+
            "les années suivantes...",
        CompetencesHumaines: [
            {
                Libelle: "Médiatrice/diplomate",
                Id: 1
            },
            {
                Libelle: "Optimiste",
                Id: 2
            },
            {
                Libelle: "Sociable",
                Id: 3
            }
        ],
        CompetencesTechniques: [
            {
                Libelle: "SQL",
                Id: 1
            },
            {
                Libelle: "HTML",
                Id: 2
            },
            {
                Libelle: "CSS",
                Id: 2
            },
            {
                Libelle: "Architecture client-serveur",
                Id: 2
            }
        ]
    };
    exp1.Change = function (index) { exp1.MenuActif = index; };
    return exp1;
}

function getExperience2() {
    var index = 0;
    var exp2 = {
        Id: 2,
        MenuActif: 0,
        Name: "Web api : Meeting tracker",
        Contexte:
            "Projet étudiant, développeur-concepteur, médiatrice, but du projet, à quoi il sert",
        Description: "Description des taches que j'ai effectué," +
            "des problèmes rencontrés et des résolutions, des captures d'écrans..." +
            "Le projet a évolué depuis, implémentation de news fonctions pour d'autres étudiants " +
            "les années suivantes...",
        CompetencesHumaines: [
            {
                Libelle: "Médiatrice/diplomate",
                Id: 1
            },
            {
                Libelle: "Optimiste",
                Id: 2
            },
            {
                Libelle: "Sociable",
                Id: 3
            }
        ],
        CompetencesTechniques: [
            {
                Libelle: "SQL",
                Id: 1
            },
            {
                Libelle: "Socket",
                Id: 1
            },
            {
                Libelle: "Java",
                Id: 2
            },
            {
                Libelle: "HTML",
                Id: 2
            },
            {
                Libelle: "CSS",
                Id: 2
            },
            {
                Libelle: "Architecture client-serveur",
                Id: 2
            },
            {
                Libelle: "Méthodes agiles",
                Id: 2
            }
        ]
    };
    exp2.Change = function (index) { exp2.MenuActif = index; };
    return exp2;
}