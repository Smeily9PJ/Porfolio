function MenuController($scope) {
    var items = [
        {
            Name: "Accueil",
            Href: "#/home",
            Active: true
        },
        {
            Name: "Expériences",
            Href: "#/experience",
            Active: false
        },
        {
            Name: "Compétences",
            Href: "#/competence",
            Active: false
        },
        {
            Name: "Activités extra-pro",
            Href: "#/loisir",
            Active: false
        },
        {
            Name: "Contact",
            Href: "#/contact",
            Active: false
        }
    ];
    var Menu = {};
    Menu.Items = items;
    var index = 0;
    Menu.Change = function (index) {
        for (var i = 0; i < Menu.Items.length; i++) {
            if(i == index){
                Menu.Items[i].Active = true;
            } else {
                Menu.Items[i].Active = false;
            }
        }
    }

    $scope.Menu = Menu;
}
