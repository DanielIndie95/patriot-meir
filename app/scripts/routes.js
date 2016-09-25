(function () {
    angular.module('summarySharing')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/viewSummary', {
                templateUrl: 'view.summary.partial.html',
                controller: 'viewSummaryCtrl',
                controllerAs: 'vm'
            });
    }
})();