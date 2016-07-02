/* * * * * * * *
* pmhc.co
*
* Description
* * * * * * * */

(function() {
 	
 	"use strict";

 
 	angular.module('pmhc.co', ['ui.scrollpoint'])

 	/* Website environment settings */
 	.constant('pmhcConfig', {
 		author: 'Philip Chung',
 		email: 'philarlol@gmail.com',
 		fsClass: 'fp',
 		fsBreakpoint: 'fs-enabled', //Breakpoints requirement for fs layout
 		//minHeight: 481  	//Minimum height to render full screen layout
 	})

 	/* Main controller */

 	.controller('mainCtrl', ['$scope', 'pmhcConfig', function($scope, pmhcConfig) {
 				var vm = this;
 				vm.viewHeight = 0;
 				vm.fs = false;

 	
 	}])

 	/* <main> Directive,*/
 
 	.directive('mainWidget', ['$document', '$window', '$timeout', 'pmhcConfig', function($document, $window, $timeout, pmhcConfig) {
 
 
 		return {
 			controller: 'mainCtrl',
 			bindToController: true,
  			controllerAs: 'main',
 			link: function($scope, element, attr, vm) {
				var d = null;
				var animateScroll = null;
 	
 				updateLayout();
 		
				$scope.$on('pmhc.resize', function() {
					if (d) $timeout.cancel(d);
					d = $timeout(function() {
							$scope.$apply(updateLayout)
							$scope.$broadcast('scrollpointShouldReset');
						}, 250);
				});
 /*
				$scope.$on('pmhc.scroll', function(e, delta) {
 					if (animateScroll) return;
	   					performScroll((delta * -$window.innerHeight+60), 0, delta);
				})
*/

				function performScroll(target, rate, delta) {
			 

				if (delta == -1) {

					console.log(target)
					 
		 
 					$window.scrollTo(0, $window.scrollY + rate)
					target = Math.floor(target - rate);
 					rate = target/20;
 					if (rate < 1) rate = 1;
						 
			 
				}
				else {
					 
		 
 			 	   console.log(target)
 
 					$window.scrollTo(0, $window.scrollY + rate)
 
 			 		target = Math.ceil(target - rate);
			  					rate = target/20;
 					if (rate > -1) rate = -1;

				}
	 

					if (target == 0) {
						cancelAnimationFrame(animateScroll);
						animateScroll = null;
						return;

					}
 

 					animateScroll = requestAnimationFrame(function(){
						performScroll(target, rate, delta);
								 
					})
			 
				}


  				function updateLayout() {
  					vm.viewHeight = $window.innerHeight;
  			       // vm.fs = (getMediaquery()) ? true : false; 
				}

				function getMediaquery() {
					var mq = $window.getComputedStyle(element[0], ':after').getPropertyValue('content');

					return (pmhcConfig.fsBreakpoint == mq.replace(/"/g, '')) ? true : false;
				}
		 				
 			},

 		}
 	}])

 

 	.directive('mainTop', ['$window', '$timeout', function($window, $timeout) {
  	
 		return {
 
 			templateUrl: '/partials/main-top.html',
 
 			link: function($scope, element, attr, vm) {

 				 console.log($scope)
 			}
 		}
 	}])


 	.directive('projectBody', ['$window', '$timeout', function($window, $timeout) {
  	
 		return {
 
 			templateUrl: '/partials/project.html',
 
 			link: function($scope, element, attr, vm) {
 
 			}
 		}
 	}])

 


 	.directive('widgetResize', ['$window', '$timeout', 'pmhcConfig', function($window, $timeout, pmhcConfig) {

 		return {
 	  
 			scope: {
 				widgetResize: '=' /* param: {'class-name':[additional, 'default']} */
 			},

 			link: function($scope, element, attr, vm) {
 				var args = $scope.widgetResize;
				var d = null;
 	
 
 				handleResize(args);
 
				$scope.$on('pmhc.resize', function() {
					if (d) $timeout.cancel(d);
					d = $timeout(function() {
						handleResize(args)
					}, 250);
				});
 	
 				function handleResize(args) {
			 
	 				for (var name in args) {
	 					if ($window.innerHeight >= pmhcConfig.minHeight) {
							element.css(name, ($window.innerHeight + args[name][0])+'px');
						}
						else {
							element.css(name, 'inherit');
						}
					}
 				}

 			}
 		}
 	}])
 
 
 	.directive('eventCapture', ['$window', function($window){
 		// Runs during compile
 		return {
 
 			link: function($scope) {
 				/*
  				angular.element($window).on('DOMMouseScroll mousewheel onmousewheel', function(e) {
  					var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
 					$scope.$broadcast('pmhc.scroll', delta)
 	 
 				})
 				*/
 		 
 				angular.element($window).on('resize', function(e) {
 					$scope.$broadcast('pmhc.resize')
 				})
 
 			}
 		};
 	}])
 	 
 

})();


