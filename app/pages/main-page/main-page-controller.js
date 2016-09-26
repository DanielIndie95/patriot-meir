(function () {
  angular
    .module('summarySharing')
    .controller('MainPageCtrl', ['$scope', 'usersModel', 'summariesModel', MainController])
    .filter('summariesFilter', summariesFilter);

  function MainController($scope, usersModel, summariesModel) {
    var vm = this;

    vm.categories = getCategories();
    vm.summaries = getSummaries();

    function getCategories() {
      return [
        {name: 'Math'},
        {name: 'Science'},
        {name: 'History'}];
    }

    function getSummaries() {

      usersModel.login(function () {
        summariesModel.getSummaries()
          .then(function (summaries) {
            vm.summaries = summaries;
            var summaries_by_id = [];
            for (var i = 0; i < vm.summaries.length; i++) {
              var summary = vm.summaries[i];
              summaries_by_id[summary.id] = summary;
              summariesModel.getVotesForSummary(summary.id)
                .then(function (res) {
                  var ratings = res.votes;
                  var realSummary = summaries_by_id[res.item];
                  var avg = 0;
                  if (ratings.length) {
                    var sum = ratings.reduce(function (a, b) {
                      return a + b;
                    });
                    avg = sum / ratings.length;
                    realSummary.rating = {
                      count: ratings.length,
                      value: avg

                    };
                  }
                  else{
                    realSummary.rating = {
                      count: 0,
                      value: 0

                    };
                  }
                  $scope.$apply();

                });
            }
          });
      });
    }
  }

  function summariesFilter() {
    return function (summaries, categories) {
      var visibleSummaries = [];
      var categoriesText = categories
        .filter(category => category.selected)
        .map(category => category.name);
      if(categoriesText.length === 0){
        return summaries;
      }
      summaries.forEach(summary => {
        if (summary.tags.filter(tag => categoriesText.indexOf(tag) > -1).length > 0) {
          visibleSummaries.push(summary);
        }
      });
      return visibleSummaries;
    }
  }

})();
