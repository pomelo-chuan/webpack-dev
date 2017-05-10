function newsController($scope) {
    var vm = this;
    $scope.count = 0;
    vm.add = function () {
        $scope.count++
    }

    // @flow
    function square(n: number): number {
        return n * n;
    }

    square("2");
}

export default newsController;
