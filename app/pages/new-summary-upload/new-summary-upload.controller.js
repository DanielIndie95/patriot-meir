(function () {

  angular.module('summarySharing').controller('newSummaryUploadController', ['summariesModel', 'usersModel',
    newSummaryUploadController]);

  function newSummaryUploadController(summaryModel, usersModel) {

    var vm = this;

    vm.onUploadSummary = onUploadSummary;
    vm.onAddNewQuestion = onAddNewQuestion;
    vm.onAddTag = onAddTag;
    vm.tags = [];

    vm.questions = [
      {
        question: "How is the supreme leader?",
        answers: ["General Aladin", "123"]
      },
      {
        question: "How is the supreme leader?",
        answers: ["General Aladin", "123"]
      },
      {
        question: "How is the supreme leader?",
        answers: ["General Aladin", "123"]
      }
    ];

    initializeCkEditor();

    function initializeCkEditor() {
      CKEDITOR.replace('editor');
    }

    function onUploadSummary() {
      var content = CKEDITOR.instances.editor.getData();
      var header = vm.title;
      var tags = vm.tags;
      var questions = JSON.parse(angular.toJson(vm.questions));

      usersModel.login(function () {
        summaryModel.addNewSummary(header, content, tags, questions);
      });
    }

    function onAddNewQuestion() {
      vm.questions.push({question: vm.newQuestion, answers: [vm.newAnswer]});
      vm.newAnswer = '';
      vm.newQuestion = '';
    }

    function onAddTag() {
      //on enter key pressed
      if (event.keyCode == 13) {
        vm.tags.push(vm.newTag);
        vm.newTag = '';
      }
    }
  }

})();
