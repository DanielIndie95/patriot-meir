angular.module('summarySharing')
  .directive('summaryMainPageView', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/summary-main-page-view/summary-main-page-view.html',
      replace: true
    }
  });
