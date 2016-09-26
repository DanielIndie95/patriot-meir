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

    api.getUserName = getUserName;

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

          firebase.auth().currentUser.updateProfile({
            displayName: name,
            score: 0
          });
          return createUserInUsers(authData.user);
        });
    }

    function createExternalAuthUser(user) {
      return createUserInUsers(user);
    }

    function createUserInUsers(user) {
      return firebase.database().ref(`/users/${user.uid}`).set({
        displayName: user.displayName,
        uid: user.uid,
        email: user.email
      });
    }

    function getUserScore(userId) {
      return firebase.database().ref(`users/${userId}`).once('value').then(function (data) {
        var user = data.val();
        return user.score;
      });
    }

    function getUserName(userId) {
      return firebase.database().ref(`users/${userId}`).once('value').then(function (data) {
        var user = data.val();
        return user.displayName;
      });
    }

    function getCurrentUser() {
      var user = firebase.auth().currentUser;
      return user;
    }

    function login(callback) {
      var isLoggedIn = getCurrentUser();
      if (isLoggedIn == null) {
        auth().then(function (result) {
          callback();
        });
      }
      else{
        callback();
      }
    }

    function auth() {

      var provider = new firebase.auth.GoogleAuthProvider();

      return firebase.auth().signInWithPopup(provider).then(function (authData) {
        return createExternalAuthUser(authData.user);
      });

    }

    ctr();
    return api;
  }
})();
