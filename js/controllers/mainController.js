// MAIN CONTROLLER
application.controller("mainController", ['$scope', function($scope){
	// le $scope indique le "dommaine d'action du controller"
    	
    $scope.tableshow = false;

    $scope.submit = function(){
    	console.log($scope.userfirstname);
    	console.log($scope.username);
    	console.log($scope.useremail);

    	$scope.tableshow = !$scope.tableshow;

    			
    };
    		

}])
