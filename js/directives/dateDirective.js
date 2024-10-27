angular.module("baseProjeto").directive("formatDate", function () {
  return {
    require: "ngModel",
    link: function (scope, element, attrs, ngModelCtrl) {
      ngModelCtrl.$parsers.push(function (viewValue) {
        var cleaned = viewValue.replace(/[^0-9]/g, "");
        if (cleaned.length >= 2) {
          cleaned = cleaned.substring(0, 2) + "/" + cleaned.substring(2);
        }
        if (cleaned.length >= 5) {
          cleaned = cleaned.substring(0, 5) + "/" + cleaned.substring(5, 9);
        }
        element.val(cleaned);
        return cleaned;
      });
    },
  };
});
