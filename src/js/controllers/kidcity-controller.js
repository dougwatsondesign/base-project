angular.module("app")
  .controller("kidcityController", function($stateParams){
    var self = this;

    this.data = [
      { skill: "UX Design" },
      { skill: "Marketing Campaigns" },
      { skill: "Branding" },
      { skill: "Web Design" },
      { skill: "Training" },
      { skill: "Audio/Video" },
      { skill: "Executive Strategy" },
      { skill: "Wordpress" },
      { skill: "Graphic Design" },
    ]

    this.pics = [
      { img: "KC-logo.png" },
      { img: "KC-clean.png" },
      { img: "KC-overnight.png" },
      { img: "KC-buscard.png" },
      { img: "KC-giftcard.png"},
      { img: "KC-menu.png"},
      { img: "KC-poster.png"}
]

  })
