angular.module('summarySharing')
  .directive('tagView', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/tag-view/tag-view.directive.html',
      replace: true
    }
  });
