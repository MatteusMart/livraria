<?php
// exibe todas as variáveis enviadas via
// POST ao PHP
// var_dump($_POST);

// criar uma variável em PHP
$titulo = $_POST['titulo'];
$autor = $_POST['autor'];
$categoria = $_POST['categoria'];
$valor = $_POST['valor'];

// conexão com o banco de dados
$servidor = 'localhost';
$usuario = 'root';
$senha = '';
$bancodados = 'db_livraria';

try {
  // definindo as configurações de conexão com o banco de dados
  $conexao = new PDO("mysql:host=$servidor;dbname=$bancodados;charset=utf8", $usuario, $senha);

  // seta o modo de erro do PDO para exception
  $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  //query de inserção de dados no DB MySQL
  $sql = "INSERT into tb_livros(titulo,autor,categoria,valor)
        VALUES('$titulo','$autor','$categoria',$valor)";

  // prepara a execução da query sql acima 
  $comando = $conexao->prepare($sql);
  // executa a query preparada ascima
  $comando->execute();

  // criar um array para resposta ao usuário
  $resposta = array("Resposta"=>"Ok",
  "Mensagem"=>"Cadastro realizado com sucesso");

  // converte o array resposta em JSON
  // JSON_UNESCAPED_UNICODE = manter o arquivo com mapa de caracter padrao
  $json = json_encode($resposta,JSON_UNESCAPED_UNICODE);

  echo $json;

  // echo "Cadastro realizado com sucesso";
} catch (PDOException $e) {
  echo "Erro: " . $e->getMessage();
}
// final de conexão
