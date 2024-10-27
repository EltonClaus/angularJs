angular.module("baseProjeto").controller("baseProjetoCtrl", function ($scope) {
  $scope.app = "Base Projeto";
  $scope.contatos = [];

  $scope.adicionarContato = function (contato) {
    $scope.contatos.push(angular.copy(contato));

    $scope.formCadastro.$setPristine();
    console.log(contato);
    $scope.limpaCampos();
  };

  $scope.carregaEndereco = async function (cep) {
    var url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    response = await url.json();

    $scope.contato.logradouro = response.logradouro;
    $scope.contato.bairro = response.bairro;
    $scope.contato.cidade = response.localidade;
    $scope.contato.estado = response.estado;
  };

  $scope.limpaCampos = function () {
    let form = document.forms.namedItem("formCadastro");
    form.reset();
  };
});
