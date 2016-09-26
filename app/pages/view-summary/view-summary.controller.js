(function () {

    var app = angular.module('summarySharing');
    app.controller("viewSummaryCtrl", ViewSummaryCtrl);

    ViewSummaryCtrl.$inject = ["$scope", "votesModel"];

    function ViewSummaryCtrl($scope, votesModel) {
    var vm  =  this;
    vm.questions = getQuestions();
    vm.comments = getComments();

    function getQuestions() {
      return [
        {
          text: 'question 1',
          answers: [
            {
              rating: {
                count: 345,
                value: 7.3
              },
              user: {
                name: 'Daniel',
                id: 'abinav_t'
              },
              created: '19/06/2016',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non eleifend erat. Aliquam erat volutpat. Vivamus fringilla lorem a ligula commodo tincidunt. Etiam velit lacus, convallis in purus eu, maximus interdum ante. Sed tincidunt pharetra tortor, vitae rutrum dui sagittis sed. Donec faucibus venenatis mollis. Proin vel consectetur augue, ut blandit arcu.'
            },
            {
              rating: {
                count: 234,
                value: 6.3
              },
              user: {
                name: 'Yosi',
                id: 'cheth'
              },
              created: '15/06/2016',
              text: 'Phasellus sagittis egestas quam, sollicitudin condimentum nulla imperdiet quis. Aliquam erat volutpat. Donec id consectetur sem. Duis et ipsum at nunc lacinia porta at ac eros. Proin condimentum venenatis leo, sit amet efficitur sem lacinia sed. Vestibulum et magna sit amet neque ullamcorper ultricies eget eget diam. Nam sed sagittis nibh.  '
            },
            {
              rating: {
                count: 456,
                value: 3.6
              },
              user: {
                name: 'Eyal Golan',
                id: 'ritu'
              },
              created: '13/06/2016',
              text: 'Donec dignissim pharetra nibh ut interdum. Praesent aliquet dolor tortor, vestibulum consequat velit fermentum vitae. Sed et justo in nibh tristique luctus id in ipsum. Nam ipsum turpis, gravida in fermentum eu, sodales quis justo. Nunc scelerisque mi neque, id dapibus felis aliquam quis. Cras vestibulum tellus nec lobortis bibendum. Donec a felis nulla. Etiam porttitor pellentesque est.'
            }
          ]
        }, {
          text: 'question 2',
          answers: [
            {
              rating: {
                count: 567,
                value: 9.3
              },
              user: {
                name: 'Daniel',
                id: 'abinav_t'
              },
              created: '19/06/2016',
              text: 'answer 2.1'
            },
            {
              rating: {
                count: 433,
                value: 6.1
              },
              user: {
                name: 'Daniel',
                id: 'abinav_t'
              },
              created: '15/06/2016',
              text: 'answer 2.2'
            },
            {
              rating: {
                count: 112,
                value: 5.6
              },
              user: {
                name: 'Daniel',
                id: 'abinav_t'
              },
              created: '13/06/2016',
              text: 'answer 2.3'
            }
          ]
        }
      ];
      function addRating(number) {

        firebase.auth().signInWithEmailAndPassword("meirisstupid2@gmail.com", "1234567").catch(function (error, authData) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);

          }
        ).then(function (authData, x) {
          firebase.auth().currentUser.updateProfile({
            displayName: "merichka"
          }).then(function () {
            votesModel.addVote("bomtoin12", number);
            var votes = votesModel.getVotesForItem("bomtoin12", number);
          })
        });
      }
    }

    function getComments() {
      return [
        {
          user: {
            name: 'Daniel',
            id: 'abinav_t'
          },
          text: 'Vim nullam fastidii ei, nullam commune ei mei, pri te tation possim. Alii sensibus neglegentur cum an, corpora laboramus posidonium ei pro. Vero graecis vim an, meis tractatos conclusionemque sea no, mutat ludus cu vim. Cu sit diam aeterno, error civibus ei pro.',
          created: '13/05/2016'
        },
        {
          user: {
            name: 'Yosi',
            id: 'cheth'
          },
          text: 'When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$',
          created: '17/05/2016'
        },
        {
          user: {
            name: 'Eyal Golan',
            id: 'ritu'
          },
          text: 'Vim nullam fastidii ei, nullam commune ei mei, pri te tation possim. Alii sensibus neglegentur cum an, corpora laboramus posidonium ei pro. Vero graecis vim an, meis tractatos conclusionemque sea no, mutat ludus cu vim. Cu sit diam aeterno, error civibus ei pro.',
          created: '17/05/2016'
        }];
    }
  }
})();

