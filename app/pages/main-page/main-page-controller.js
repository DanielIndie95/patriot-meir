(function() {
    angular.module('summarySharing').controller('MainPageCtrl', ['$scope', MainController])

    function MainController() {
        var vm = this;

        vm.categories = getCategories();
        vm.summaries = getSummaries();

        function getCategories() {
            return ['Math', 'Science', 'History'];
        }

        function getSummaries() {

            // getData('');
            return [{
                    title: "World War II Summary",
                    author: "Leo Tolstoy",
                    rating: {
                        count: 169,
                        value: 5.1
                    },
                    content: "jsdfjnk;lds'gmnbs hiyfhijdsl;jnbkalisodfk'plkadsbjugofjopasd",
                    tags: [{ name: 'History' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "World War II Summary",
                    author: "Leo Tolstoy",
                    rating: {
                        count: 169,
                        value: 5.1
                    },
                    content: "jsdfjnk;lds'gmnbs hiyfhijdsl;jnbkalisodfk'plkadsbjugofjopasd",
                    tags: [{ name: 'History' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
                {
                    title: "War and Peace",
                    author: "Adolf Hitler",
                    rating: {
                        count: 345,
                        value: 7.4
                    },
                    content: "asdasdasdasdasdasdasd",
                    tags: [{ name: 'History' }, { name: 'Germany' }]
                },
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