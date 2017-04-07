angular.module("app")
  .controller("miscController", function($stateParams){
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
         { img: "misc-vivant.png" },
         { img: "misc-vivant-cover.png" },
         { img: "misc-vivant-toc.png" },

          { img: "misc-gamenight.png" },

          { img: "misc-clanless.png" },
          { img: "misc-clanless-shirts.png" },

          { img: "misc-strat.png" },

          { img: "misc-ascension.png" },

          { img: "misc-hydro.png" },

          { img: "misc-revenent.png" },

          { img: "misc-bst-logo.png" },
          { img: "misc-bst-front.png" },
          { img: "misc-bst-back.png" },

]

  })
