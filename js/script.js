// Criando uma função em JavaScript
// Formato ES6 baseado em Arrow Function

// Função que realiza cadastro de livros 
const cadastrar = () =>{

    // captura o valor digitado no campo titulo
    // declara a variável titulo e captura o valor preenchido pelo usuario
    let titulo = document.getElementById('titulo').value
    // declara a variável titulo e captura o valor preenchido pelo usuario
    let autor = document.getElementById('autor').value
    // declara a variável titulo e captura o valor preenchido pelo usuario
    let categoria = document.getElementById('categoria').value
    // declara a variável titulo e captura o valor preenchido pelo usuario
    let valor = document.getElementById('valor').value

    // verifica se a variável titulo está vazia
    // se verdadeiro(estiver sem preencher) irá exibir um alerta
    if(titulo == ''){
    alert('Digite o título do livro')
    return
    }

     // verifica se a variável autor está vazia
    // se verdadeiro(estiver sem preencher) irá exibir um alerta
    if(autor == ''){
    alert('Digite o nome do autor')
    return
    }

     // verifica se a variável categoria está vazia
    // se verdadeiro(estiver sem preencher) irá exibir um alerta
    if(categoria == ''){
    alert('Escolha a categoria')
    return
    }

     // verifica se a variável valor está vazia
    // se verdadeiro(estiver sem preencher) irá exibir um alerta
    if(valor == ''){
    alert('Digite o valor')
    return
    }

    // envio dos dados usando o fetch ao backend
    fetch('backend/cadastrar-livros.php',{
        method:'POST',
        body:`titulo=${titulo}&autor=${autor}&categoria=${categoria}&valor=${valor}`,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    })
    
}

// um igual só = recebe, dois igual == comparação
// Forma de função padrao
// function Cadastrar(){
// }