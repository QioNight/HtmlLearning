angular.module('indexs', [])
    .controller('indexCtrl', function($scope) {
        $scope.hello = {
            text: 'welcome this...'
        }
    })

angular.module('list', [])
    .controller('listCtrl', function($scope) {
        $scope.userlist = [1, 2, 3, 4];
        $scope.prolist = [11, 22, 33, 44];
    });
