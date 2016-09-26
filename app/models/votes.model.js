(function(){
    'use strict'
    var app = angular.module("summarySharing");
    var votes = app.factory("votesModel" , VotesModel);

    function VotesModel()
    {
        var database;
        function ctr(){
            database = firebase.database();
        }
        var api = {};
        api.addVote = AddVote;
        api.getVotesForItem = GetVotesForItem;

        function AddVote(item , rating)
        {
            var user = firebase.auth().currentUser;
            
            if(user)
            {
                var userId = user.uid;
                firebase.database().ref(`votes/${item}/${userId}`).set({                   
                    "rating":  rating
                });
            }
        }

        function GetVotesForItem(item)
        {
            return firebase.database().ref(`/votes/${item}/`).once('value').then(function(snapshot) {
                var votes = [];
                var models = snapshot.val();
                for(var model in models)
                {
                    if(models.hasOwnProperty(model))
                        votes.push(models[model].rating)
                }
                return votes;
            });
        }
        ctr();
        return api;
    }
})();