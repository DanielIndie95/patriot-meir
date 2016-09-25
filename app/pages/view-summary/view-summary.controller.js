(function(){
    
    var app = angular.module('summarySharing');
    app.controller("viewSummaryCtrl" , ViewSummaryCtrl);
   
    ViewSummaryCtrl.$inject = ["$scope"];
    
    function ViewSummaryCtrl($scope)
    {
        var vm = this;
        
        vm.test= "hello world";
    }
})()