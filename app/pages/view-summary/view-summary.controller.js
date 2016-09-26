(function () {

  var app = angular.module('summarySharing');
  app.controller("viewSummaryCtrl", ViewSummaryCtrl);

  ViewSummaryCtrl.$inject = [];

  function ViewSummaryCtrl() {
    var vm = this;

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
              created: '19/06/2016',
              text: 'answer 1.1'
            },
            {
              rating: {
                count: 234,
                value: 6.3
              },
              created: '15/06/2016',
              text: 'answer 1.2'
            },
            {
              rating: {
                count: 456,
                value: 3.6
              },
              created: '13/06/2016',
              text: 'answer 1.3'
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
              created: '19/06/2016',
              text: 'answer 2.1'
            },
            {
              rating: {
                count: 433,
                value: 6.1
              },
              created: '15/06/2016',
              text: 'answer 2.2'
            },
            {
              rating: {
                count: 112,
                value: 5.6
              },
              created: '13/06/2016',
              text: 'answer 2.3'
            }
          ]
        }
      ];
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
          text: 'Vim nullam fastidii ei, nullam commune ei mei, pri te tation possim. Alii sensibus neglegentur cum an, corpora laboramus posidonium ei pro. Vero graecis vim an, meis tractatos conclusionemque sea no, mutat ludus cu vim. Cu sit diam aeterno, error civibus ei pro.',
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
