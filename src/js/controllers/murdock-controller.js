angular.module("app")
  .controller("murdockController", function($stateParams){
    var self = this;

    this.data = [
      { skill: "UX Design" },
      { skill: "Web Design" },
      { skill: "Training" },
      { skill: "Product Management" },
      { skill: "HTML/CSS" },
      { skill: "AngularJS 1.5" },
      { skill: "SASS" },
      { skill: "JavaScript" }
    ]

    this.pics = [
      { img: "murdock-case.png" },
      { img: "murdock-doc.png" },
      { img: "murdock-insurance.png" },
      { img: "murdock-med.png" },
      { img: "murdock-comments.png" },
      { img: "murdock-lit.png" }
]

  })
