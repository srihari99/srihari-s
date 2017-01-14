
var eventsApp = angular.module("eventsApp", []);


eventsApp.controller("EventController",
    function EventController($scope) {
      $scope.event = {
        name: "Angular Boot Camp",
        date: "09-09-2003",
        time: "10:30am",
        location: {
          address: "Google Headquaters",
          city: "california"
        },
          
        imageUrl: "http://pascalprecht.github.io/slides/angularjs-insights/img/angularjs-logo.png",
          
        sessions: [
          {
            name: "Big Wobowski",
            topic: "Fundamentals in AngularJS",
            duration: "2hours",
            imageUrl: "http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60?s=200&r=pg&d=mm",
              upVoteCount: 00
          },
          {
            name: "Mike Lowbowski",
            topic: "In Depth Concepts",
            duration: "3hours",
            imageUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
              upVoteCount: 00
          },
          {
            name: "Matt Damowski",
            topic: "Advanced Maneuver",
            duration: "4hours",
            imageUrl: "https://www.gravatar.com/avatar/3ca9eefaaf23fe04664846cb0d5c42ba?d=retro&s=200",
              upVoteCount: 00
          }
          ]

      }
      $scope.like = function(session) {
              session.upVoteCount++;
      };
      $scope.dislike = function(session) {
          session.upVoteCount--;
      };
      
      });