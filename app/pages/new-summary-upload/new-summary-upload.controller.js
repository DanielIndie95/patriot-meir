(function () {

  angular.module('summarySharing').controller('newSummaryUploadController', [newSummaryUploadController]);

  function newSummaryUploadController() {

    var vm = this;

    vm.onUploadSummary = onUploadSummary;
    vm.onAddNewQuestion = onAddNewQuestion;
    vm.onAddTag = onAddTag;
    vm.tags = [];

    vm.questions = [
      {
        question: "How is the supreme leader?",
        answer: "General Aladin"
      },
      {
        question: "How is the supreme leader?",
        answer: "General Aladin"
      },
      {
        question: "How is the supreme leader?",
        answer: "General Aladin"
      }
    ];

    initializeCkEditor();

    function initializeCkEditor() {
      CKEDITOR.replace('editor');
    }

    function onUploadSummary() {
      //get text from the editor
      var data = CKEDITOR.instances.editor.getData();
    }

    function onAddNewQuestion() {
      vm.questions.push({question: vm.newQuestion, answer: vm.newAnswer});
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
