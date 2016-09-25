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
          likes: 5,
          dislikes: 3,
          content: "asdasdasdasdasdasdasd"
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
