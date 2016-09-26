(function(){
    'use strict'    
    var app = angular.module("summarySharing");
    var usersModel = app.service("usersModel" , UsersModel);
    function UsersModel()
    {
        var user;
        function ctr(){
            user = firebase.auth().currentUser;
        }

        function AddUser(name , email  , password)
        {
            firebase.auth().createUserWithEmailAndPassword(email, password , {"name" : name , "rating" : 0}).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            });           
        }
    }
})()