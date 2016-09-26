(function () {
  'use strict';
  var app = angular.module("summarySharing");
  var votes = app.factory("summariesModel", SummariesModel);
  SummariesModel.$inject = ['votesModel' , 'usersModel'];

  function SummariesModel(votesModel , usersModel) {
    var database;

    function ctr() {
      database = firebase.database();
    }

    var api = {};
    api.addNewSummary = addNewSummary;
    api.getSummary = getSummary;
    api.addTagForSummary = addTagForSummary;
    api.getTagsForSummary = getTagsForSummary;
    api.addQuestionForSummary = addQuestionForSummary;
    api.addAnswerForQuestion = addAnswerForQuestion;
    api.getQuestionsForSummary = getQuestionsForSummary;
    api.getVotesForSummary = getVotesForSummary;
    api.addCommentForSummary = addCommentForSummary;

    function addNewSummary(header, content, tags) {
      var user = usersModel.getCurrentUser();

      if (user) {
        var summary = createSumamry(header, content, tags, user);
        firebase.database().ref(`/summaries/`).push(summary);
      }
    }

    function createSummary(header, content, tags, user) {
      return new {
        content: content,
        tags: tags,
        ownerId: user.uid,
        header: header
      };
    }

    function getSummaryRef(summaryId)
    {
      return firebase.database().ref(`/summaries/${summaryId}`);
    }

    function getSummary(summaryId)
    {
      return getSummaryRef().once('value').then(function(data){
        var summary = data.val();
        var comments = convertDbCommentsToComments(summary.comments);
        summary.comments = comments;
        return summary;
      })
    }

    function addTagForSummary(summaryId, tag) {
      var tags = getTagsForSummary(summaryId);
      tags.push(tag);
      var summary = firebase.database().ref(`/summaries/${summaryId}`);

      summary.update({'tags': tags});
    }

    function getCommentsForSummary(summaryId){
      return getSummaryRef().once('value').then(function(data){
        var commentsData = data.val().comments;
        return convertDbCommentsToComments(commentsData);
      })
    }

    function convertDbCommentsToComments(dbComments)
    {
      commentsData.map((commentData) => convertDbCommentToComment(commentData) );
    }

    function convertDbCommentToComment(dbComment)
    {
      return new {
        'text' : dbComment.content,
        'created' : dbComment.created,
        'user' : {
          'name' : usersModel.getCurrentUser().displayName,
          'id' : usersModel.getCurrentUser().uid
        }
      };
    }

    function addCommentForSummary(summaryId , comment){
      var comments = getCommentsForSummary(summaryId);
      var user = usersModel.getCurrentUser();
      var newComment = createComment(comment , user);
      comments.push(comment);
      var summary = firebase.database().ref(`/summaries/${summaryId}`);

      summary.update({'comments': comments});
    }

    function createComment(text , user){
      return {
        content : text ,
        created: new Date(),
        user : user.uid
      };
    }

    function getCommentsForSummary(summaryId){
      return firebase.database().ref(`/summaries/${summaryId}`).once('value').then(function (data) {
        var summary = data.val();
        return summary.comments;
      });
    }

    function getTagsForSummary(summaryId) {
      return firebase.database().ref(`/summaries/${summaryId}`).once('value').then(function (data) {
        var summary = data.val();
        return summary.tags;
      });
    }

    function addQuestionForSummary(summaryId , question , answer)
    {
      var questions = getQuestionsForSummary(summaryId);
      var newQuestion = createNewQuestion(question , answer);
      questions.push(newQuestion);
      var summary = firebase.database().ref(`/summaries/${summaryId}`);

      summary.update({'questions': questions});
    }

    function addAnswerForQuestion(summaryId , questionId , answer)
    {
      var answers = getAnswersForQuestion(summaryId , questionId);
      var questions = getQuestionsForSummary(summaryId);
      answers.push(answer);
      questions[questionId].answers = answers;

      var summary = firebase.database().ref(`/summaries/${summaryId}`);

      summary.update({'questions': questions});
    }

    function getQuestionsForSummary(summaryId) {
      return firebase.database().ref(`/summaries/${summaryId}`).once('value').then(function (data) {
        var summary = data.val();
        return summary.questions;
      });
    }

    function getAnswersForQuestion(summaryId , questionId){
      return firebase.database().ref(`/summaries/${summaryId}`).once('value').then(function (data) {
        var summary = data.val();
          for(var question in summary.questions)
          {
            if(question == questionId)
            {
              return summary.questions[question].answers;
            }
          }
      });
    }

    function createNewQuestion(content , answers){
      return {
        content : content,
        answers : answers
      };
    }
    function getVotesForSummary(summaryId) {
      return votesModel.getVotesForItem(summaryId);
    }

    ctr();
    return api;
  }
})();
