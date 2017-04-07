angular.module("app")
  .controller("portfolioController", function($stateParams){
    var self = this;

    this.data = [
         { img: "misc-thumb.png", link: "home.misc" },
         { img: "murdock-thumb.png", link: "home.murdock" },
         { img: "KC-thumb.png", link: "home.kidcity" },
         { img: "ethos-thumb.png", link: "home.ethos" },
         { img: "diantha-thumb.png", link: "home.diantha" },
         { img: "labfour-thumb.png", link: "home.labfour" }

    ]

  })
