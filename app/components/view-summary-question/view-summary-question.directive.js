(function () {
  angular
    .module('summarySharing')
    .directive('viewSummaryQuestion', viewSummaryQuestion);

  function viewSummaryQuestion() {
    return {
      scope: {
        question: '=',
        vote: '&'
      },
      restrict: 'E',
      templateUrl: 'components/view-summary-question/view-summary-question.template.html'
    };
  }
})();
