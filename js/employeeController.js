// employeeController.js
var app = angular.module('myApp');    
app.controller("employeeCtrl", function ($scope,$http) { 
  $scope.show = 2;   
  $http.get('json/employee.json')    
  .success(function(data){    
   $scope.employees = data;    
 }) 
  $http.get('json/employee2.json')    
  .success(function(data){    
   $scope.employees2 = data;    
 })    
  .error(function(data,status){    
   console.error('Fail to load data', status, data);    
   $scope.employees = { };     
 });  
});

