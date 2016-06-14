function CompetenceController($scope, $state) {

    var humaines = [
        getCompetenceHumaine1(),
        getCompetenceHumaine2(),
        getCompetenceHumaine3()
    ];


    var techniques = [
        getCompetenceTechnique1(),
        getCompetenceTechnique2()
    ];

    var Competences = {};
    Competences.Humaines = humaines;
    Competences.Techniques = techniques;
    Competences.Items = techniques;
    Competences.DefaultSwitch = 0;
    //Competences.DefaultSwitch = ($state.params.refSwitch != null || $state.params.refSwitch != undefined) ? $state.params.refSwitch : 0;
    Competences.DefaultSelect = $state.params.refCompetence;
    Competences.Switch = function() {
        if (this.DefaultSwitch == 0) {
            this.Items = this.Techniques;
            this.DefaultSwitch = 1;
        } else {
            this.Items = this.Humaines;
            this.DefaultSwitch = 0;
        }
    };
    $scope.Competences = Competences;

}

function getCompetenceHumaine1() {
    var index = 0;
    var comp1 = {
        Id: 1,
        MenuActif: 0,
        Name: "Comp hum 1 : faire marche ce p$^*ù de truc",
        Contexte:
            "L'histoire se déroule dans un univers au bord de la crise." +
            "Afin de rapprocher les différentes espèces intelligentes et de réguler le terrorisme interplanétaire, les plus puissantes planètes créent la Fédération Galactique, dont le nombre de planètes membres ne cesse de grossir." +
            "Les « Chozos » (chōjin-zoku en VO (鳥人族 qui se lit « race d'homme oiseau »)), la race la plus intelligente connue de la galaxie, enseignent aux différentes civilisations quelques rudiments de leur technologie de pointe, afin de maintenir la stabilité de l'Univers." +
            "De l'autre côté, les « pirates de l'espace », peuple nomade ultra-violent très avancé technologiquement, vivent de leurs pillages effectués par leurs armées suréquipées sur les autres planètes, et récupèrent petit à petit les secrets chozos disséminés dans la galaxie." +
            "Les Chozos combattent ardemment les pirates, puis disparaissent totalement de la galaxie, laissant derrière eux leurs colonies en ruines. Que leur est-il arrivé ? Pourquoi les représentants de ce peuple éparpillé aux quatre coins de l'Univers ont-ils tous disparu en même temps ? Les recherches de la Fédération Galactique sont vaines, et ces derniers restent seuls face aux pirates." +
            "Certaines des prophéties chozos retrouvées prétendent tout de même que leur peuple attend la venue de l'« Élu » de la lumière, équipé de leurs armes et armure, qui achèvera leur œuvre." +
            "Le temps passa et l'Élu ne vint pas. Toute la bordure extérieure de la galaxie est maintenant sous le joug des pirates de l'espace qui se sont relancés sur les dernières études des Chozos au sujet des armes biologiques." +
            "Sur la petite colonie terrienne K-2L naît Samus Aran." +
            "Alors que cette dernière est âgée de 3 ans, la colonie est attaquée par un escadron scientifique des pirates de l'Espace. La police galactique sur place tente de résister, mais est balayée par la nouvelle « recrue » des pirates ici à l'essai : Ridley." +
            "La famille de Samus est massacrée ainsi que tous les habitants de K-2L, excepté Samus Aran elle-même, cachée par sa mère. Cette dernière est recueillie après le drame par deux Chozos rescapés, arrivés trop tard. Ces derniers la ramènent sur la dernière planète chozo, Zebes, où ils la forment comme un guerrier chozo." +
            "Une dizaine d'années plus tard, Samus achève son entraînement et se voit confier un Costume de Puissance sur mesure, le seul de toute l'Histoire Galactique. (Il apparaît dans le second volume du E-manga que Mother Brain était une intelligence artificielle créée par les Chozos et qui leur servait d'ordinateur central, d'interface planétaire, sur la planète Zebes. Par la suite et sans qu'on ait encore d'explication, Mother Brain deviendra le chef des pirates de l'espace.)" +
            "Samus, dans le but d'éliminer la menace pirate afin de venger ses parents, devient un Space Hunter, un des mercenaires de la Fédération galactique. Cependant, une de ses missions la ramènera sur Zebes, à présent en ruine, afin d'y effectuer sa « Mission zéro », car les pirates de l'espace, dans leur soif de pouvoir, viennent de réveiller une ancienne malédiction : les Métroïdes…" +
            "La trame scénaristique de la série ainsi que certains éléments de l'histoire semblent fortement inspirés ou similaires à l'univers des films de science-fiction Alien. C'est d'ailleurs pour cela qu'un boss du jeu s'appelle Ridley (référence à Ridley Scott)." +
            "Les Chozos disent être morts à cause d'un poison qui occupera le devant de la scène dans toute la saga Prime, le phazon.",
        Description: "Une desc",
        Projets: [
            {
                Libelle: "Projet 1",
                Id: 1
            },
            {
                Libelle: "Projet 2",
                Id: 2
            }
        ]

    };
    comp1.Change = function (index) { comp1.MenuActif = index; };
    return comp1;
}

function getCompetenceHumaine2() {
    var index = 0;
    var comp1 = {
        Id: 2,
        MenuActif: 0,
        Name: "Comp hum 2 : faire marche ce p$^*ù de truc",
        Contexte:
            "L'histoire se déroule dans un univers au bord de la crise." +
            "Afin de rapprocher les différentes espèces intelligentes et de réguler le terrorisme interplanétaire, les plus puissantes planètes créent la Fédération Galactique, dont le nombre de planètes membres ne cesse de grossir." +
            "Les « Chozos » (chōjin-zoku en VO (鳥人族 qui se lit « race d'homme oiseau »)), la race la plus intelligente connue de la galaxie, enseignent aux différentes civilisations quelques rudiments de leur technologie de pointe, afin de maintenir la stabilité de l'Univers." +
            "De l'autre côté, les « pirates de l'espace », peuple nomade ultra-violent très avancé technologiquement, vivent de leurs pillages effectués par leurs armées suréquipées sur les autres planètes, et récupèrent petit à petit les secrets chozos disséminés dans la galaxie." +
            "Les Chozos combattent ardemment les pirates, puis disparaissent totalement de la galaxie, laissant derrière eux leurs colonies en ruines. Que leur est-il arrivé ? Pourquoi les représentants de ce peuple éparpillé aux quatre coins de l'Univers ont-ils tous disparu en même temps ? Les recherches de la Fédération Galactique sont vaines, et ces derniers restent seuls face aux pirates." +
            "Certaines des prophéties chozos retrouvées prétendent tout de même que leur peuple attend la venue de l'« Élu » de la lumière, équipé de leurs armes et armure, qui achèvera leur œuvre." +
            "Le temps passa et l'Élu ne vint pas. Toute la bordure extérieure de la galaxie est maintenant sous le joug des pirates de l'espace qui se sont relancés sur les dernières études des Chozos au sujet des armes biologiques." +
            "Sur la petite colonie terrienne K-2L naît Samus Aran." +
            "Alors que cette dernière est âgée de 3 ans, la colonie est attaquée par un escadron scientifique des pirates de l'Espace. La police galactique sur place tente de résister, mais est balayée par la nouvelle « recrue » des pirates ici à l'essai : Ridley." +
            "La famille de Samus est massacrée ainsi que tous les habitants de K-2L, excepté Samus Aran elle-même, cachée par sa mère. Cette dernière est recueillie après le drame par deux Chozos rescapés, arrivés trop tard. Ces derniers la ramènent sur la dernière planète chozo, Zebes, où ils la forment comme un guerrier chozo." +
            "Une dizaine d'années plus tard, Samus achève son entraînement et se voit confier un Costume de Puissance sur mesure, le seul de toute l'Histoire Galactique. (Il apparaît dans le second volume du E-manga que Mother Brain était une intelligence artificielle créée par les Chozos et qui leur servait d'ordinateur central, d'interface planétaire, sur la planète Zebes. Par la suite et sans qu'on ait encore d'explication, Mother Brain deviendra le chef des pirates de l'espace.)" +
            "Samus, dans le but d'éliminer la menace pirate afin de venger ses parents, devient un Space Hunter, un des mercenaires de la Fédération galactique. Cependant, une de ses missions la ramènera sur Zebes, à présent en ruine, afin d'y effectuer sa « Mission zéro », car les pirates de l'espace, dans leur soif de pouvoir, viennent de réveiller une ancienne malédiction : les Métroïdes…" +
            "La trame scénaristique de la série ainsi que certains éléments de l'histoire semblent fortement inspirés ou similaires à l'univers des films de science-fiction Alien. C'est d'ailleurs pour cela qu'un boss du jeu s'appelle Ridley (référence à Ridley Scott)." +
            "Les Chozos disent être morts à cause d'un poison qui occupera le devant de la scène dans toute la saga Prime, le phazon.",
        Description: "Une desc",
        Projets: [
            {
                Libelle: "Projet 1",
                Id: 1
            },
            {
                Libelle: "Projet 2",
                Id: 2
            }
        ]

    };
    comp1.Change = function (index) { comp1.MenuActif = index; };
    return comp1;
}

function getCompetenceHumaine3() {
    var index = 0;
    var comp1 = {
        Id: 3,
        MenuActif: 0,
        Name: "Comp hum 3 : faire marche ce p$^*ù de truc",
        Contexte:
            "L'histoire se déroule dans un univers au bord de la crise." +
            "Afin de rapprocher les différentes espèces intelligentes et de réguler le terrorisme interplanétaire, les plus puissantes planètes créent la Fédération Galactique, dont le nombre de planètes membres ne cesse de grossir." +
            "Les « Chozos » (chōjin-zoku en VO (鳥人族 qui se lit « race d'homme oiseau »)), la race la plus intelligente connue de la galaxie, enseignent aux différentes civilisations quelques rudiments de leur technologie de pointe, afin de maintenir la stabilité de l'Univers." +
            "De l'autre côté, les « pirates de l'espace », peuple nomade ultra-violent très avancé technologiquement, vivent de leurs pillages effectués par leurs armées suréquipées sur les autres planètes, et récupèrent petit à petit les secrets chozos disséminés dans la galaxie." +
            "Les Chozos combattent ardemment les pirates, puis disparaissent totalement de la galaxie, laissant derrière eux leurs colonies en ruines. Que leur est-il arrivé ? Pourquoi les représentants de ce peuple éparpillé aux quatre coins de l'Univers ont-ils tous disparu en même temps ? Les recherches de la Fédération Galactique sont vaines, et ces derniers restent seuls face aux pirates." +
            "Certaines des prophéties chozos retrouvées prétendent tout de même que leur peuple attend la venue de l'« Élu » de la lumière, équipé de leurs armes et armure, qui achèvera leur œuvre." +
            "Le temps passa et l'Élu ne vint pas. Toute la bordure extérieure de la galaxie est maintenant sous le joug des pirates de l'espace qui se sont relancés sur les dernières études des Chozos au sujet des armes biologiques." +
            "Sur la petite colonie terrienne K-2L naît Samus Aran." +
            "Alors que cette dernière est âgée de 3 ans, la colonie est attaquée par un escadron scientifique des pirates de l'Espace. La police galactique sur place tente de résister, mais est balayée par la nouvelle « recrue » des pirates ici à l'essai : Ridley." +
            "La famille de Samus est massacrée ainsi que tous les habitants de K-2L, excepté Samus Aran elle-même, cachée par sa mère. Cette dernière est recueillie après le drame par deux Chozos rescapés, arrivés trop tard. Ces derniers la ramènent sur la dernière planète chozo, Zebes, où ils la forment comme un guerrier chozo." +
            "Une dizaine d'années plus tard, Samus achève son entraînement et se voit confier un Costume de Puissance sur mesure, le seul de toute l'Histoire Galactique. (Il apparaît dans le second volume du E-manga que Mother Brain était une intelligence artificielle créée par les Chozos et qui leur servait d'ordinateur central, d'interface planétaire, sur la planète Zebes. Par la suite et sans qu'on ait encore d'explication, Mother Brain deviendra le chef des pirates de l'espace.)" +
            "Samus, dans le but d'éliminer la menace pirate afin de venger ses parents, devient un Space Hunter, un des mercenaires de la Fédération galactique. Cependant, une de ses missions la ramènera sur Zebes, à présent en ruine, afin d'y effectuer sa « Mission zéro », car les pirates de l'espace, dans leur soif de pouvoir, viennent de réveiller une ancienne malédiction : les Métroïdes…" +
            "La trame scénaristique de la série ainsi que certains éléments de l'histoire semblent fortement inspirés ou similaires à l'univers des films de science-fiction Alien. C'est d'ailleurs pour cela qu'un boss du jeu s'appelle Ridley (référence à Ridley Scott)." +
            "Les Chozos disent être morts à cause d'un poison qui occupera le devant de la scène dans toute la saga Prime, le phazon.",
        Description: "Une desc",
        Projets: [
            {
                Libelle: "Projet 1",
                Id: 1
            },
            {
                Libelle: "Projet 2",
                Id: 2
            }
        ]

    };
    comp1.Change = function (index) { comp1.MenuActif = index; };
    return comp1;
}

function getCompetenceTechnique1() {
    var index = 0;
    var comp1 = {
        Id: 1,
        MenuActif: 0,
        Name: "Comp tec 1 : faire marche ce p$^*ù de truc",
        Contexte:
            "L'histoire se déroule dans un univers au bord de la crise." +
            "Afin de rapprocher les différentes espèces intelligentes et de réguler le terrorisme interplanétaire, les plus puissantes planètes créent la Fédération Galactique, dont le nombre de planètes membres ne cesse de grossir." +
            "Les « Chozos » (chōjin-zoku en VO (鳥人族 qui se lit « race d'homme oiseau »)), la race la plus intelligente connue de la galaxie, enseignent aux différentes civilisations quelques rudiments de leur technologie de pointe, afin de maintenir la stabilité de l'Univers." +
            "De l'autre côté, les « pirates de l'espace », peuple nomade ultra-violent très avancé technologiquement, vivent de leurs pillages effectués par leurs armées suréquipées sur les autres planètes, et récupèrent petit à petit les secrets chozos disséminés dans la galaxie." +
            "Les Chozos combattent ardemment les pirates, puis disparaissent totalement de la galaxie, laissant derrière eux leurs colonies en ruines. Que leur est-il arrivé ? Pourquoi les représentants de ce peuple éparpillé aux quatre coins de l'Univers ont-ils tous disparu en même temps ? Les recherches de la Fédération Galactique sont vaines, et ces derniers restent seuls face aux pirates." +
            "Certaines des prophéties chozos retrouvées prétendent tout de même que leur peuple attend la venue de l'« Élu » de la lumière, équipé de leurs armes et armure, qui achèvera leur œuvre." +
            "Le temps passa et l'Élu ne vint pas. Toute la bordure extérieure de la galaxie est maintenant sous le joug des pirates de l'espace qui se sont relancés sur les dernières études des Chozos au sujet des armes biologiques." +
            "Sur la petite colonie terrienne K-2L naît Samus Aran." +
            "Alors que cette dernière est âgée de 3 ans, la colonie est attaquée par un escadron scientifique des pirates de l'Espace. La police galactique sur place tente de résister, mais est balayée par la nouvelle « recrue » des pirates ici à l'essai : Ridley." +
            "La famille de Samus est massacrée ainsi que tous les habitants de K-2L, excepté Samus Aran elle-même, cachée par sa mère. Cette dernière est recueillie après le drame par deux Chozos rescapés, arrivés trop tard. Ces derniers la ramènent sur la dernière planète chozo, Zebes, où ils la forment comme un guerrier chozo." +
            "Une dizaine d'années plus tard, Samus achève son entraînement et se voit confier un Costume de Puissance sur mesure, le seul de toute l'Histoire Galactique. (Il apparaît dans le second volume du E-manga que Mother Brain était une intelligence artificielle créée par les Chozos et qui leur servait d'ordinateur central, d'interface planétaire, sur la planète Zebes. Par la suite et sans qu'on ait encore d'explication, Mother Brain deviendra le chef des pirates de l'espace.)" +
            "Samus, dans le but d'éliminer la menace pirate afin de venger ses parents, devient un Space Hunter, un des mercenaires de la Fédération galactique. Cependant, une de ses missions la ramènera sur Zebes, à présent en ruine, afin d'y effectuer sa « Mission zéro », car les pirates de l'espace, dans leur soif de pouvoir, viennent de réveiller une ancienne malédiction : les Métroïdes…" +
            "La trame scénaristique de la série ainsi que certains éléments de l'histoire semblent fortement inspirés ou similaires à l'univers des films de science-fiction Alien. C'est d'ailleurs pour cela qu'un boss du jeu s'appelle Ridley (référence à Ridley Scott)." +
            "Les Chozos disent être morts à cause d'un poison qui occupera le devant de la scène dans toute la saga Prime, le phazon.",
        Description: "Une desc",
        Projets: [
            {
                Libelle: "Projet 1",
                Id: 1
            },
            {
                Libelle: "Projet 2",
                Id: 2
            }
        ]

    };
    comp1.Change = function (index) { comp1.MenuActif = index; };
    return comp1;
}

function getCompetenceTechnique2() {
    var index = 0;
    var comp1 = {
        Id: 2,
        MenuActif: 0,
        Name: "comp tec 2 : faire marche ce p$^*ù de truc",
        Contexte:
            "L'histoire se déroule dans un univers au bord de la crise." +
            "Afin de rapprocher les différentes espèces intelligentes et de réguler le terrorisme interplanétaire, les plus puissantes planètes créent la Fédération Galactique, dont le nombre de planètes membres ne cesse de grossir." +
            "Les « Chozos » (chōjin-zoku en VO (鳥人族 qui se lit « race d'homme oiseau »)), la race la plus intelligente connue de la galaxie, enseignent aux différentes civilisations quelques rudiments de leur technologie de pointe, afin de maintenir la stabilité de l'Univers." +
            "De l'autre côté, les « pirates de l'espace », peuple nomade ultra-violent très avancé technologiquement, vivent de leurs pillages effectués par leurs armées suréquipées sur les autres planètes, et récupèrent petit à petit les secrets chozos disséminés dans la galaxie." +
            "Les Chozos combattent ardemment les pirates, puis disparaissent totalement de la galaxie, laissant derrière eux leurs colonies en ruines. Que leur est-il arrivé ? Pourquoi les représentants de ce peuple éparpillé aux quatre coins de l'Univers ont-ils tous disparu en même temps ? Les recherches de la Fédération Galactique sont vaines, et ces derniers restent seuls face aux pirates." +
            "Certaines des prophéties chozos retrouvées prétendent tout de même que leur peuple attend la venue de l'« Élu » de la lumière, équipé de leurs armes et armure, qui achèvera leur œuvre." +
            "Le temps passa et l'Élu ne vint pas. Toute la bordure extérieure de la galaxie est maintenant sous le joug des pirates de l'espace qui se sont relancés sur les dernières études des Chozos au sujet des armes biologiques." +
            "Sur la petite colonie terrienne K-2L naît Samus Aran." +
            "Alors que cette dernière est âgée de 3 ans, la colonie est attaquée par un escadron scientifique des pirates de l'Espace. La police galactique sur place tente de résister, mais est balayée par la nouvelle « recrue » des pirates ici à l'essai : Ridley." +
            "La famille de Samus est massacrée ainsi que tous les habitants de K-2L, excepté Samus Aran elle-même, cachée par sa mère. Cette dernière est recueillie après le drame par deux Chozos rescapés, arrivés trop tard. Ces derniers la ramènent sur la dernière planète chozo, Zebes, où ils la forment comme un guerrier chozo." +
            "Une dizaine d'années plus tard, Samus achève son entraînement et se voit confier un Costume de Puissance sur mesure, le seul de toute l'Histoire Galactique. (Il apparaît dans le second volume du E-manga que Mother Brain était une intelligence artificielle créée par les Chozos et qui leur servait d'ordinateur central, d'interface planétaire, sur la planète Zebes. Par la suite et sans qu'on ait encore d'explication, Mother Brain deviendra le chef des pirates de l'espace.)" +
            "Samus, dans le but d'éliminer la menace pirate afin de venger ses parents, devient un Space Hunter, un des mercenaires de la Fédération galactique. Cependant, une de ses missions la ramènera sur Zebes, à présent en ruine, afin d'y effectuer sa « Mission zéro », car les pirates de l'espace, dans leur soif de pouvoir, viennent de réveiller une ancienne malédiction : les Métroïdes…" +
            "La trame scénaristique de la série ainsi que certains éléments de l'histoire semblent fortement inspirés ou similaires à l'univers des films de science-fiction Alien. C'est d'ailleurs pour cela qu'un boss du jeu s'appelle Ridley (référence à Ridley Scott)." +
            "Les Chozos disent être morts à cause d'un poison qui occupera le devant de la scène dans toute la saga Prime, le phazon.",
        Description: "Une desc",
        Projets: [
            {
                Libelle: "Projet 1",
                Id: 1
            },
            {
                Libelle: "Projet 2",
                Id: 2
            }
        ]

    };
    comp1.Change = function (index) { comp1.MenuActif = index; };
    return comp1;
}
