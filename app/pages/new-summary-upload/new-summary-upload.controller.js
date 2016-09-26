(function () {

  angular.module('summarySharing').controller('newSummaryUploadController', [newSummaryUploadController]);

  function newSummaryUploadController() {

    var vm = this;

    vm.onUploadSummary = onUploadSummary;

    initializeCkEditor();

    function initializeCkEditor() {
      CKEDITOR.replace('editor');
    }

    function onUploadSummary() {
      //get text from the editor
      var data = CKEDITOR.instances.editor.getData();
    }
  }

})();
