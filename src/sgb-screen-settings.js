'use strict';

angular.module('sgb-screen-settings', ['megazord'])
    .controller('sgb-screen-settings-controller', ['$scope', '_router', '_screen', '_screenParams', '_data', function ($scope, _router, _screen, _screenParams, _data) {
        _screen.initialize($scope, _screenParams);

        $scope.categories = _screenParams.categories;
    }]);
