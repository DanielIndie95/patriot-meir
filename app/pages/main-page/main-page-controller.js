(function () {
  angular
    .module('summarySharing')
    .controller('MainPageCtrl', MainController)
    .filter('summariesFilter', summariesFilter);

  function MainController() {
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

      // getData('');
      return [{
        header: "World War II Summary",
        author: "Leo Tolstoy",
        rating: {
          count: 169,
          value: 5.1
        },
        content: "jsdfjnk;lds'gmnbs hiyfhijdsl;jnbkalisodfk'plkadsbjugofjopasd",
        tags: [{name: 'Math'}]
      },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Science'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'Science'}, {name: 'Germany'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          header: "World War II Summary",
          author: "Leo Tolstoy",
          rating: {
            count: 169,
            value: 5.1
          },
          content: "jsdfjnk;lds'gmnbs hiyfhijdsl;jnbkalisodfk'plkadsbjugofjopasd",
          tags: [{name: 'History'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
        {
          header: "War and Peace",
          author: "Adolf Hitler",
          rating: {
            count: 345,
            value: 7.4
          },
          content: "asdasdasdasdasdasdasd",
          tags: [{name: 'History'}, {name: 'Germany'}]
        },
      ];
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
        if (summary.tags.filter(tag => categoriesText.indexOf(tag.name) > -1).length > 0) {
          visibleSummaries.push(summary);
        }
      });
      return visibleSummaries;
    }
  }

})();
