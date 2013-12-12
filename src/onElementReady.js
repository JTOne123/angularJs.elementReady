angular
    .module('gdnui')
    .directive('onElementReady', function () {
        return {
            restrict: 'A',
            scope: {
                onElementReady: '&'
            },            
            controller: function ($scope, $element) {
                $scope.$watch("onElementReady", function (onElementReady) {
                    if (onElementReady) {                        
                        var onElementReadyDelegat = onElementReady();
                        if (onElementReadyDelegat)
                            onElementReadyDelegat($element);
                    }
                });
            }
        };
    });