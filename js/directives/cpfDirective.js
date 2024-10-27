angular.module("baseProjeto").directive("formatCpf", function () {
  return {
    require: "ngModel",
    link: function (scope, element, attrs, ngModelCtrl) {
      ngModelCtrl.$parsers.push(function (viewValue) {
        var cleaned = viewValue.replace(/\D/g, "");
        if (cleaned.length > 3) {
          cleaned = cleaned.substring(0, 3) + "." + cleaned.substring(3);
        }
        if (cleaned.length > 7) {
          cleaned = cleaned.substring(0, 7) + "." + cleaned.substring(7);
        }
        if (cleaned.length > 11) {
          cleaned = cleaned.substring(0, 11) + "-" + cleaned.substring(11, 13);
        }
        element.val(cleaned);
        return cleaned;
      });
    },
  };
});
