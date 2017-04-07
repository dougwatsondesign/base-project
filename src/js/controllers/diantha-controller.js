angular.module("app")
  .controller("dianthaController", function($stateParams){
    var self = this;

    this.data = [
      { skill: "Branding" },
      { skill: "Logo Design" },
      { skill: "Graphic Design" }
    ]

    this.pics = [
         { img: "diantha-logo.png" },
         { img: "diantha-sign.png" },
         { img: "diantha-box.png" },
         { img: "diantha-blacktag.png" },
         { img: "diantha-shirttag.png" },
         { img: "diantha-whitebag.png" },
         { img: "diantha-blackbag.png" },
]

  })
