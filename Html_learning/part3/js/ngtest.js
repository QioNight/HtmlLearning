angular.module('testApp', [])

    .controller('ngtest', function($scope) {
        $scope.test = [
            {name: '张三', age: '23', sex: '男'},
            {name: '李四', age: '46', sex: '女'},
            {name: '王五', age: '32', sex: '男'}
        ];
        $scope.close = function(x) {
            $scope.test.splice(x,1);
        };
        $scope.submi = function() {

        }
    })

    .controller('watchEg', function($scope) {
        $scope.userName = '';
        $scope.userTel = '';
        $scope.$watch('userName', function() {
            $scope.Info = '姓名:' + $scope.userName + ' Tel:' + $scope.userTel;
        });
        $scope.$watch('userTel', function() {
            $scope.Info = '姓名:' + $scope.userName + ' Tel:' + $scope.userTel;
        });
    })

    .controller('sub', function($scope) {
        $scope.submi = function() {
            var name = $scope.Name;
            var tel = $scope.Tel;
            if(name == undefined) {
                alert('请输入name')
            }else if(tel == undefined) {
                alert('请输入tel')
            }else {
                alert(name +' : '+ tel);
            }
        }
    })

    .controller('setColor', function($scope) {
        $scope.colors = ['red', 'green', 'blue'];
        $scope.setBg = {'background-color': 'red'};
    });
