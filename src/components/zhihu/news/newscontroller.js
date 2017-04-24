function newsController($scope) {
    var vm = this;
    $scope.count = 0;
    vm.add = function () {
       $scope.count++
    }
}

export default newsController;
