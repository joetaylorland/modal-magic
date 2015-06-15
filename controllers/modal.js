app.controller("ModalCtrl", function($scope, $state, $stateParams) {

	$scope.closeModal = function() {
		$state.go('main');
	}

	$scope.openModal = function() {
		$state.go('modal');
	}

});