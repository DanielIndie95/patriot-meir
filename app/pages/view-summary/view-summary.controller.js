(function () {

    var app = angular.module('summarySharing');
    app.controller("viewSummaryCtrl", ViewSummaryCtrl);

    ViewSummaryCtrl.$inject = ["$scope", "votesModel"];

    function ViewSummaryCtrl($scope, votesModel) {

        // Get a reference to the database service
        var vm = this;
        vm.addRating = addRating;
        vm.test = "hello world";

      vm.questions = [
        {
          text: 'question 1',
          answers: [
            {
              rating: {
                count: 345,
                value: 7.3
              },
              created: '19/06/2016',
              text: 'answer 1.1'
            },
            {
              rating: {
                count: 234,
                value: 6.3
              },
              created: '15/06/2016',
              text: 'answer 1.2'
            },
            {
              rating: {
                count: 456,
                value: 3.6
              },
              created: '13/06/2016',
              text: 'answer 1.3'
            }
          ]
        },{
          text: 'question 2',
          answers: [
            {
              rating: {
                count: 567,
                value: 9.3
              },
              created: '19/06/2016',
              text: 'answer 2.1'
            },
            {
              rating: {
                count: 433,
                value: 6.1
              },
              created: '15/06/2016',
              text: 'answer 2.2'
            },
            {
              rating: {
                count: 112,
                value: 5.6
              },
              created: '13/06/2016',
              text: 'answer 2.3'
            }
          ]
        }
      ];
      function addRating(number) {

        firebase.auth().signInWithEmailAndPassword("meirisstupid2@gmail.com", "1234567").catch(function (error, authData) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);

          }
        ).then(function (authData, x) {
          firebase.auth().currentUser.updateProfile({
            displayName: "merichka"
          }).then(function(){
            votesModel.addVote("bomtoin12", number);
            var votes = votesModel.getVotesForItem("bomtoin12" , number);
          })
        });
      }
    }
})();

