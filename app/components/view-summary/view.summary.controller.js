(function(){
    anguler.module('summarySharing')
    .controller("viewSummaryCtrl" , ViewSummary);
    
    ViewSummary.$inject = ["$scope"];
    
    function ViewSummaryCtrl($scope)
    {
        var vm = this;
        
        vm.test= "hello world";
    }
})()