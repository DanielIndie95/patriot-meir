(function () {
  angular.module('summarySharing')
    .directive('starRating', starRating);

  function starRating() {
    return {
      restrict: 'E',
      templateUrl: 'components/star-rating/star-rating.template.html',
      scope: {
        rating: '=',
        onRatingSelect: '&?',
        readonly: '=?'
      },
      link: function (scope, element, attributes) {
        scope.max = 10;

        if (scope.isOpen == undefined) {
          scope.isOpen = false;
        }
        scope.percent = function() {
          if(scope.rating == undefined)
          {
            return 0;
          }
          return Math.floor((1-scope.rating.value/scope.max)*100);
        }
        scope.toggle = function (index) {
          if (scope.readonly == undefined || scope.readonly === false) {
            scope.rating.value = index + 1;
            scope.onRatingSelect({
              'rating.value': index + 1
            });
          }
        };
        scope.$watch('rating.value', function (oldValue, newValue) {
          if (newValue) {
            updateStars();
          }
        });

        function updateStars() {
          scope.stars = [];
          for (var i = 0; i < scope.max; i++) {
            scope.stars.push({
              filled: i < scope.rating.value
            });
          }
        }
      }
    };
  }

})();
