// @flow
function newsController($scope: any) {
    var vm = this;
    $scope.count = 0;
    vm.add = function () {
        $scope.count++;
    }

    function square(n: number): number {
        return n * n;
    }
    
    square("2");
    
    square(1);
}

export default newsController;
