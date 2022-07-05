<?php
// ecxibe todas as variaveis enviadas via POST ao PHP
//    var_dump($_POST);

// conexão com banco de dados
$servidor = 'localhost';
$usuario = 'root';
$senha = '';
$bancodados = 'db_livraria';

try {
  $conexao = new PDO("mysql:host=$servidor;dbname=$bancodados;charset=utf8", $usuario, $senha);


  // seta o modo de erro do PDO para exception
  $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  //quary  de inserção de dados MySQl
  $sql = "SELECT * FROM tb_livros where ativo = 1";

  //prepara a execição do comando sql acima
  $comando = $conexao->prepare($sql);


  //execute a query preparada acima
  $comando->execute();

  //essa linha ira tratar o dados do retorno do SELECT executado, e somente usado neste caso
  $resposta = $comando->fetchALL(PDO::FETCH_ASSOC);


  //echo "Connected successfully";
} catch (PDOException $e) {
  //aqui é tratado o erro e retornado ao usuario
  $resposta = array("resposta"=>"Erro","Mensagem"=>$e->getMessage());
}

  //conjverte o array resposta para json
$json = json_encode($resposta,JSON_UNESCAPED_UNICODE);

  echo $json;
//final da conexão