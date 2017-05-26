angular.module('myTest', [])
    .controller('test1', function($scope) {
        $scope.startNum = 200;
        $scope.Num = 0;
        $scope.addNum = 0;
        $scope.minusNum = 0;
        //监控数值变化，同步
        $scope.$watch('Num', function() {
            $scope.compareNum = $scope.startNum + $scope.Num + $scope.addNum - $scope.minusNum;
        })
        $scope.$watch('compareNum', function() {
            $scope.difference = $scope.compareNum - $scope.startNum;
        })
        //累加累减
        $scope.add = function() {
            $scope.compareNum += $scope.Num;
        }
        $scope.minus = function() {
            $scope.compareNum -= $scope.Num;
        }
    })

    .controller('test2', function($scope) {
        $scope.addA = 0;
        $scope.addB = 0;
        $scope.addValues = function() {
            $scope.sum = $scope.addA + $scope.addB;
        }
    })

    //test3
    .controller('LevelA', function($scope) {
        $scope.title = 'LevelA';
        $scope.valueA = 11;
        $scope.inc = function() {
            $scope.valueA++;
        }
    })
    .controller('LevelB', function($scope) {
        $scope.title = 'LevelB';
        $scope.valueB = 22;
        $scope.inc = function() {
            $scope.valueB++;
        }
    })
    .controller('LevelC', function($scope) {
        $scope.title = 'LevelC';
        $scope.valueC = 33;
        $scope.inc = function() {
            $scope.valueC++;
        }
    })
