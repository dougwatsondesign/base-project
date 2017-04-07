angular.module("app")
  .controller("labfourController", function($stateParams){
    var self = this;

    this.data = [
          { skill: "Executive Leadership" },
          { skill: "UX Design" },
          { skill: "Marketing Campaigns" },
          { skill: "Branding" },
          { skill: "Web Design" },
          { skill: "Training" },
          { skill: "Audio/Video" },
          { skill: "Executive Strategy" },
          { skill: "Wordpress" },
          { skill: "Public Speaking" },
          { skill: "Training" },
          { skill: "Content Marketing" },
          { skill: "SEO" },
          { skill: "Social Media" },
          { skill: "Wordpress" },
          { skill: "Graphic Design" }
    ]

    this.pics = [
         { img: "labfour-manu.png" },
         { img: "labfour-manu-outside.png" },
         { img: "labfour-manu-inside.png" },
         { img: "labfour-reeba.png" },
         { img: "labfour-nigeria.png" },
         { img: "labfour-it.png" },
         { img: "labfour-busskills.png" },
         { img: "labfour-friends.png" },
         { img: "labfour-college.png" },
         { img: "labfour-juvenile.png" },
         { img: "labfour-free.png" },
         { img: "labfour-start.png" },

         { img: "labfour-vit.png" },

         { img: "labfour-proposal.png" },

         { img: "labfour-upcoming.png" }
]

  })
