(function () {

    var app = angular.module('summarySharing');
    app.controller("viewSummaryCtrl", ViewSummaryCtrl);

    ViewSummaryCtrl.$inject = ["$scope", "votesModel"];

    function ViewSummaryCtrl($scope, votesModel) {

        // Get a reference to the database service
        var vm = this;
        vm.addRating = addRating;
        vm.test = "hello world";

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
})()