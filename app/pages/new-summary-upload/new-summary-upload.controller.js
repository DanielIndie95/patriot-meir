(function () {

  angular.module('summarySharing').controller('newSummaryUploadController', [newSummaryUploadController]);

  function newSummaryUploadController() {

    var vm = this;

    vm.onUploadSummary = onUploadSummary;
    vm.onAddNewQuestion = onAddNewQuestion;
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
      console.log('new answer')
    }
  }

})();
