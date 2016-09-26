(function () {
<<<<<<< HEAD
  angular
    .module('summarySharing')
    .controller('MainPageCtrl', MainController)
    .filter('summariesFilter', summariesFilter);
=======
  angular.module('summarySharing').controller('MainPageCtrl', ['$scope', 'summariesModel',
    'usersModel', MainController])
>>>>>>> 93fed987dd9c7ebc4b17c8850834dbe66ae55c37

  function MainController($scope, summariesModel, usersModel) {
    var vm = this;

    vm.categories = getCategories();
    vm.summaries;

<<<<<<< HEAD
=======
    getSummaries();

>>>>>>> 93fed987dd9c7ebc4b17c8850834dbe66ae55c37
    function getCategories() {
      return [
        {name: 'Math'},
        {name: 'Science'},
<<<<<<< HEAD
        {name: 'History'}];
=======
        {
          name: 'History'
        }];
>>>>>>> 93fed987dd9c7ebc4b17c8850834dbe66ae55c37
    }

    function getSummaries() {
      usersModel.auth().then(function () {
        summariesModel.getSummaries()
          .then(function (summaries) {
            vm.summaries = summaries;
            for (var i = 0; i < vm.summaries.length; i++) {
              var summary = vm.summaries[i];

<<<<<<< HEAD
      // getData('');
      return [{
        title: "World War II Summary",
        author: "Leo Tolstoy",
        rating: {
          count: 169,
          value: 5.1
        },
        content: "jsdfjnk;lds'gmnbs hiyfhijdsl;jnbkalisodfk'plkadsbjugofjopasd",
        tags: [{name: 'Math'}]
      },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Science'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'Science'}, {name: 'Germany'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          title: "World War II Summary",
          author: "Leo Tolstoy",
          rating: {
            count: 169,
            value: 5.1
          },
          content: "jsdfjnk;lds'gmnbs hiyfhijdsl;jnbkalisodfk'plkadsbjugofjopasd",
          tags: [{name: 'History'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          title: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
      ];
=======
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
>>>>>>> 93fed987dd9c7ebc4b17c8850834dbe66ae55c37
    }
  }

<<<<<<< HEAD
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
        if (summary.tags.filter(tag => categoriesText.indexOf(tag.name) > -1).length > 0) {
          visibleSummaries.push(summary);
        }
      });
      return visibleSummaries;
    }
  }

})();
=======

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
>>>>>>> 93fed987dd9c7ebc4b17c8850834dbe66ae55c37
