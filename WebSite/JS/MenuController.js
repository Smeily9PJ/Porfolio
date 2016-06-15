function MenuController($scope) {
    var items = [
        {
            Name: "Home",
            Href: "#/home",
            Active: true
        },
        {
            Name: "Expérience",
            Href: "#/experience",
            Active: false
        },
        {
            Name: "Compétences",
            Href: "#/competence",
            Active: false
        },
        {
            Name: "Loisirs",
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
