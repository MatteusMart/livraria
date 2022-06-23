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

    try {
        $conexao = new PDO("mysql:host=$servidor;dbname=myDB", $usuario, $senha);
        // set the PDO error mode to exception
        $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
      } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
      }
// final de conexão
?>