(function() {
  angular.module('summarySharing').controller('MainPageCtrl', ['$scope', MainController])

  function MainController($scope) {
    var vm = this;
    vm.categories = getCategories();

    function getCategories() {
      // $http.get()
      //   .then(function (response) {
      //       return response.data;
      //   },
      //   function (response) {
      //       console.log('error');
      //       console.log(response)
      //   });
      return ['Math', 'Science', 'History'];
    }
  }
})();
