let app = angular.module("myapp", []);

app.directive("ngSelect", function () {
	return {
		restrict: "C",
		link: function (scope, elt, attrs) {
			$(document).ready(function () {
				$(elt).select2();
			});
		},
	};
});

app.directive("ngDataTable", function () {
	return {
		restrict: "C",
		link: function (scope, elt, attrs) {
			$(document).ready(function () {
				$(elt).DataTable();
			});
		},
	};
});
