angular.module("baseProjeto").directive("formatCep", function () {
  return {
    require: "ngModel",
    link: function (scope, element, attrs, ngModelCtrl) {
      ngModelCtrl.$parsers.push(function (viewValue) {
        var cleaned = viewValue.replace(/\D/g, "");
        if (cleaned.length > 5) {
          cleaned = cleaned.substring(0, 5) + "-" + cleaned.substring(5, 8);
        }
        element.val(cleaned);
        return cleaned;
      });
    },
  };
});
