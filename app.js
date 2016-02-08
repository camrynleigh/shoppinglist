var app = angular.module('shopping', []);

app.controller('MainController', ['$scope', function ($scope) {
    $scope.shoppingList = [];
    $scope.newItem = undefined;

    $scope.addNewItem = function () {
        if ($scope.newItem !== undefined && $scope.shoppingList.indexOf($scope.newItem) === -1) {
            $scope.shoppingList.push($scope.newItem);
            $scope.newItem = undefined;
        } else {
            alert($scope.newItem + ' is already in your list')
            $scope.newItem = undefined;
        }
    }

    $scope.removeItem = function (index) {
        $scope.shoppingList.splice(index, 1)
    }


}])