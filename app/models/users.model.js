(function () {
  'use strict';
  var app = angular.module("summarySharing");
  var usersModel = app.service("usersModel", UsersModel);

  function UsersModel() {
    var user;

    function ctr() {
      user = firebase.auth().currentUser;
    }

    var api = {};
    api.createUser = createUser;
    api.getUserScore = getUserScore;
    api.getCurrentUser = getCurrentUser;
    api.login = login;
    api.auth = auth;

    function createUser(name, email, password) {
      return firebase.auth().createUserWithEmailAndPassword(email, password, {
        "name": name,
        "rating": 0
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      })
        .then(function (authData) {
          return firebase.auth().currentUser.updateProfile({
            displayName: name,
            score : 0
          })
        });
    }

    function getUserScore(userId) {
        return firebase.database().ref(`users/${userId}`).once('value').then(function(data){
          var user = data.val();
          return user.score;
        });
    }

    function getCurrentUser(){
      var user = firebase.auth().currentUser;
      return user;
    }

    function login(email , password)
    {
      return firebase.auth().signInWithEmailAndPassword(
        email,
        password
      );
    }

    function auth(){
      var provider = new firebase.auth.GoogleAuthProvider();

      return firebase.auth().signInWithPopup(provider);
    }

    ctr();
    return api;
  }
})();
