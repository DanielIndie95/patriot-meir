(function () {
  angular.module('summarySharing').controller('MainPageCtrl', ['$scope', MainController])

  function MainController($scope) {
    var vm = this;

    vm.categories = getCategories();
    vm.summaries = getSummaries();

    function getCategories() {
      //return getData('');
      return ['Math', 'Science', 'History'];
    }

    function getSummaries() {

      // getData('');
      return [
        {
          title: "World War II Summary",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: ['History']
        }
      ];
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
})();
