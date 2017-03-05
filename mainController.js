// MAIN CONTROLLER
quest.controller("mainController", ['$scope', function($scope){

	// le $scope indique le "dommaine d'action du controller"


        // essai ajout de ligne ds la tableau
        $scope.liste = [];
        
        $scope.addRow = function(){
            $scope.liste.push({
            'firstname': $scope.firstname,
            'name': $scope.name,
            'email': $scope.email
            });
            
            $scope.firstname = '';
            $scope.name = '';
            $scope.email = '';
            console.log($scope.liste);
        };
            
}]);