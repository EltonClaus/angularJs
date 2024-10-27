angular.module("baseProjeto").config(function ($routeProvider) {
  $routeProvider.when("/contatos", {
    templateUrl: "view/contatos.html",
    controller: "baseProjetoCtrl",
  });

  $routeProvider.when("/carros", {
    templateUrl: "view/carros.html",
    controller: "baseProjetoCtrl",
  });

  $routeProvider.otherwise({ redirectTo: "/index" });
});
