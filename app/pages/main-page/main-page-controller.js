(function () {
  angular.module('summarySharing').controller('MainPageCtrl', ['$scope', 'summariesModel',
    'usersModel', MainController])

  function MainController($scope, summariesModel, usersModel) {
    var vm = this;

    vm.categories = getCategories();
    vm.summaries;

    getSummaries();

    function getCategories() {
      return [
        {name: 'Math'},
        {name: 'Science'},
        {
          name: 'History'
        }];
    }

    function getSummaries() {
      usersModel.auth().then(function () {
        summariesModel.getSummaries()
          .then(function (summaries) {
            vm.summaries = summaries;
            for (var i = 0; i < vm.summaries.length; i++) {
              var summary = vm.summaries[i];

              summariesModel.getVotesForSummary(summary.id)
                .then(function (ratings) {
                  var avg = 0;
                  if (ratings.length) {
                    var sum = ratings.reduce(function (a, b) {
                      return a + b;
                    });
                    avg = sum / ratings.length;
                  }
                  summary.rating = {
                    count: ratings.length,
                    value: avg
                  };
                  $scope.$digest();
                });
            }
          });
      });
    }


    function getData(url) {
      // $http.get('')
      //   .then(function (response) {
      //       return response.data;
      //   },
      //   function (response) {
      //       console.log('error');
      //       console.log(response)
      //   });
    }
  }
})
();
