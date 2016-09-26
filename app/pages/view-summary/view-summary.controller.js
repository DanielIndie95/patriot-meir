(function () {

  var app = angular.module('summarySharing');
  app.controller("viewSummaryCtrl", ViewSummaryCtrl);

  ViewSummaryCtrl.$inject = ["$scope", "votesModel"];

  function ViewSummaryCtrl($scope, votesModel) {
    var vm = this;

    vm.summary = getSummary();

    vm.hideContent = false;

    function getSummary() {
      return {
        header: 'Hello World Summary',
        content: getContent(),
        rating: {
          value: 9.3,
          count: 456
        },
        questions: getQuestions(),
        comments: getComments()
      };
    }

    function getContent() {
      return `<p>Employment Agreement</p>

<p>This Employment Agreement (this &ldquo;<strong>Agreement</strong>&rdquo;) is made and entered into as of &nbsp;September 5th, 2016, by and between Frank Mobile App Ltd., a company incorporated under the laws of the State of Israel (the &ldquo;<strong>Company</strong>&rdquo;), and Meir Blachman, ID number312218241, of 31 Psamon St., Beer-Sheva Israel (the &ldquo;<strong>Employee</strong>&rdquo;, and together with the Company, the &ldquo;<strong>Parties</strong>&rdquo;).</p>

<p><strong>WHEREAS</strong>,&nbsp;&nbsp;&nbsp; Employee is and has been serving as an Employee of the Company since ________ (the &ldquo;<strong>Commencement Date</strong>&rdquo;); and</p>

<p><strong>WHEREAS</strong>,&nbsp;&nbsp;&nbsp; the Parties desire to amend the terms and conditions which shall govern of the Employee&#39;s employment by the Company, as of the Commencement Date, as set forth below (the &ldquo;<strong>Employment</strong>&rdquo;);</p>

<p><strong>NOW, THEREFORE</strong>, in consideration of the mutual premises, covenants and other agreements contained herein, the Parties agree as follows:</p>

<p><strong>General</strong></p>

<h1>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Position and Supervision</h1>

<h2>1.1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Employee shall serve in the position set forth in Exhibit A hereto (the &ldquo;<strong>Position</strong>&rdquo;), under the supervision and direction of the Company&rsquo;s management, and in particular the person specified in Exhibit A (&ldquo;<strong>Supervisor</strong>&rdquo;), to whom Employee shall report regularly.</h2>

<h2>1.2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Employee shall perform any duties required of Employee in connection with the Position or otherwise (the &ldquo;<strong>Duties</strong>&rdquo;) diligently, conscientiously and in furtherance of the Company&#39;s best interests.</h2>

<h2>1.3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Employee agrees that any decision regarding the identity or position of Supervisor shall not constitute grounds for resignation considered as dismissal under the Severance Pay Law, 5723-1963 (the &ldquo;<strong>Severance Pay Law</strong>&rdquo;), nor shall any decision affecting the Position in the course of company across-the-board changes.</h2>

<h1>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Work Hours and Overtime.</h1>

<h2>2.1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Employee acknowledges the Position and Duties may require performance of overtime work and work during weekly rest or on holidays (&ldquo;<strong>Overtime</strong>&rdquo;), according to Company&#39;s needs. Nevertheless, Employee shall only perform Overtime beyond the amount of Overtime specified in Exhibit A after obtaining Supervisor&rsquo;s prior approval.</h2>

<h2>The compensation with respect to Overtime will be the Additional Compensation (as defined in Exhibit B).</h2>

<h1>3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Location</h1>

<h2>3.1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Employee shall be provided with the facilities to perform the Duties at Company&#39;s facilities in Israel, but understands and agrees the Position may involve domestic and international travel.</h2>

<h2>3.2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Employee agrees that such travel shall not constitute grounds for resignation considered as dismissal under the Severance Pay Law.</h2>

<p><strong>Term and Termination</strong></p>
`;
    }

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

