`use strict`;

(function(){
  var app = angular.module("angularComp");
  app.controller("complimentsController", ComplimentsController);

  function ComplimentsController(){
    var vm = this;
    var randomIndex = Math.floor(Math.random()* data.length)
    vm.data = data[randomIndex]
  }

}());
