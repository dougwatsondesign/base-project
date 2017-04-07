angular.module("app", ["ui.router"])
  .config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise("/");
    $urlRouterProvider.when('/', '/index1');

    $stateProvider.state("home", {
      url: "/",
      abstract: true, //says "yes we're putting states into template"
      template: '<ui-view></ui-view>'
    })
    .state("home.about", { //putting home.about is because about is a child of home
      url: "about",
      templateUrl: "src/templates/about.html",
      controller: "aboutController as about"
    })
    .state("home.contact", { //putting home.about is because about is a child of home
      url: "contact",
      templateUrl: "src/templates/contact.html",
      controller: "contactController as contact"
    })
    .state("home.portfolio", { //putting home.about is because about is a child of home
      url: "portfolio",
      templateUrl: "src/templates/portfolio.html",
      controller: "portfolioController as portfolio"
    })
    .state("home.resume", {
      url: "resume",
      templateUrl: "src/templates/resume.html",
      controller: "resumeController as resume"
    })
    .state("home.index1", {
      url: "index1",
      templateUrl: "src/templates/index1.html",
      controller: "index1Controller as index1"
    })
    .state("home.kidcity", {
      url: "kidcity",
      templateUrl: "src/templates/kidcity.html",
      controller: "kidcityController as kidcity"
    })
    .state("home.murdock", {
      url: "murdock",
      templateUrl: "src/templates/murdock.html",
      controller: "murdockController as murdock"
    })
    .state("home.labfour", {
      url: "labfour",
      templateUrl: "src/templates/labfour.html",
      controller: "labfourController as labfour"
    })
    .state("home.ethos", {
      url: "ethos",
      templateUrl: "src/templates/ethos.html",
      controller: "ethosController as ethos"
    })
    .state("home.misc", {
      url: "misc",
      templateUrl: "src/templates/misc.html",
      controller: "miscController as misc"
    })
    .state("home.diantha", {
      url: "diantha",
      templateUrl: "src/templates/diantha.html",
      controller: "dianthaController as diantha"
    });
  }]);
