(function () {
  angular.module('summarySharing')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/viewSummary', {
        templateUrl: 'pages/view-summary/view-summary.partial.html',
        controller: 'viewSummaryCtrl',
        controllerAs: 'vm'
      })
      .when('/main', {
        templateUrl: 'pages/main-page/main-page.template.html',
        controller: 'MainPageCtrl',
        controllerAs: 'main'
      })
      .when('/newSummary', {
        templateUrl: 'pages/new-summary-upload/new-summary-upload.partial.html',
        controller: 'newSummaryUploadController',
        controllerAs: 'newSummary'
      })
      .otherwise('/main');
  }
})();
