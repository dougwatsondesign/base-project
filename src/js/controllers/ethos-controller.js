angular.module("app")
  .controller("ethosController", function($stateParams){
    var self = this;

    this.data = [
      { skill: "UX Design" },
      { skill: "Copywriting" },
      { skill: "Marketing Campaigns" },
      { skill: "Grant Writing" },
      { skill: "Branding" },
      { skill: "Web Design" },
      { skill: "Public Speaking" },
      { skill: "Executive Strategy" },
      { skill: "Wordpress" },
      { skill: "Graphic Design" }
    ]

    this.pics = [
         { img: "ethos-buscard.png" },
         { img: "ethos-wd2.png" },
         { img: "ethos-opendoor.png" },
         { img: "ethos-apprent.png" },
]

  })
