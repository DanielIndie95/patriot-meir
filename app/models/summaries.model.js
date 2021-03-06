(function () {
  'use strict';
  var app = angular.module("summarySharing");
  var votes = app.factory("summariesModel", SummariesModel);
  SummariesModel.$inject = ['votesModel', 'usersModel'];

  function SummariesModel(votesModel, usersModel) {
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
    api.getSummaries = getSummaries;

    function addNewSummary(header, content, tags, questions) {
      var user = usersModel.getCurrentUser();

      if (user) {
        var summary = createSummary(header, content, tags, user, questions);
        console.log(summary);
        return firebase.database().ref(`/summaries/`).push(summary)
          .then(function (data) {
            return data.getKey();
          }).then(function (data) {
            return votesModel.addVote(data, 10);
          });
      }
    }

    function createSummary(header, content, tags, user, questions) {
      return {
        content: content,
        tags: tags,
        ownerId: user.uid,
        header: header,
        questions: questions
      };
    }

    function getSummaryRef(summaryId) {
      return firebase.database().ref(`/summaries/${summaryId}`);
    }

    function getSummary(summaryId) {
      return getSummaryRef().once('value').then(function (data) {
        var summary = data.val();
        var comments = convertDbCommentsToComments(summary.comments);
        summary.comments = comments;
        return summary;
      })
    }

    function getSummaries() {
      return firebase.database().ref('/summaries/').once('value').then(function (data) {
        var summaries = data.val();
        var result = [];
        for (var id in summaries) {
          var summary = summaries[id];
          var comments = convertDbCommentsToComments(summary.comments);
          summary.comments = comments;
          summary.id = id;

          result.push(summary);
          var setSummaryAuthor = function(realSummary)
          {

            usersModel.getUserName(realSummary.ownerId).then(function (userName) {
              realSummary.author = userName;
            });
          }(summary);
        }
        return result;
      })
    }

    function addTagForSummary(summaryId, tag) {
      var tags = getTagsForSummary(summaryId);
      tags.push(tag);
      var summary = firebase.database().ref(`/summaries/${summaryId}`);

      summary.update({'tags': tags});
    }

    function getCommentsForSummary(summaryId) {
      return getSummaryRef().once('value').then(function (data) {
        var commentsData = data.val().comments;
        return convertDbCommentsToComments(commentsData);
      })
    }

    function convertDbCommentsToComments(dbComments) {
      if (dbComments != undefined) {
        dbComments.map(function (commentData) {
          return convertDbCommentToComment(commentData);
        });
      }
    }

    function convertDbCommentToComment(dbComment) {
      return new {
        'text': dbComment.content,
        'created': dbComment.created,
        'user': {
          'name': usersModel.getCurrentUser().displayName,
          'id': usersModel.getCurrentUser().uid
        }
      };
    }

    function addCommentForSummary(summaryId, comment) {
      var comments = getCommentsForSummary(summaryId);
      var user = usersModel.getCurrentUser();
      var newComment = createComment(comment, user);
      comments.push(newComment);
      var summary = firebase.database().ref(`/summaries/${summaryId}`);

      summary.update({'comments': comments});
    }

    function createComment(text, user) {
      return {
        content: text,
        created: new Date(),
        user: user.uid
      };
    }

    function getTagsForSummary(summaryId) {
      return firebase.database().ref(`/summaries/${summaryId}`).once('value').then(function (data) {
        var summary = data.val();
        return summary.tags;
      });
    }

    function addQuestionForSummary(summaryId, question, answer) {
      var questions = getQuestionsForSummary(summaryId);
      var newQuestion = createNewQuestion(question, answer);
      questions.push(newQuestion);
      var summary = firebase.database().ref(`/summaries/${summaryId}`);

      summary.update({'questions': questions});
    }

    function addAnswerForQuestion(summaryId, questionId, answer) {
      var answers = getAnswersForQuestion(summaryId, questionId);
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

    function getAnswersForQuestion(summaryId, questionId) {
      return firebase.database().ref(`/summaries/${summaryId}`).once('value').then(function (data) {
        var summary = data.val();
        for (var question in summary.questions) {
          if (question == questionId) {
            return summary.questions[question].answers;
          }
        }
      });
    }

    function createNewQuestion(content, answers) {
      return {
        content: content,
        answers: answers,
        id: uuid.v1()
      };
    }

    function getVotesForSummary(summaryId) {
      return votesModel.getVotesForItem(summaryId);
    }

    ctr();
    return api;
  }
})();
