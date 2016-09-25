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
                controllerAs: 'vm'
            });
    }
})();