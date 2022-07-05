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
const listar = () =>{
    fetch('backend/listar-livros.php')

    .then(response => response.json())
    .then(resposta => {
        //aqui sera manipulado o HTML com o dado retornado pelo PHP em formato json
        //O JS monta o html de forma dinamica, atraves de um laço

        //limpa a div que ira amarzenar a lista de livros
        document.getElementById('lista-livros-grid').innerHTML = ``

        for(let cont = 0;cont < resposta.length; cont++){
            document.getElementById('lista-livros-grid').innerHTML += 
            `
                <figure>
                    <img class="livros-img" src="img/livro-faltando.png" alt="Imagem do livro">
                    <figcaption>
                        <h4>${resposta[cont]['titulo']}</h4>
                        <h5>${resposta[cont]['autor']}</h5>
                        <small>${resposta[cont]['id_categorias']}</small>
                        <h5>R$ ${resposta[cont]['valor']}</h5>
                        <button class="btn-comprar">Comprar</button>
                    </figcaption>
                </figure>
            `
        
            
        }
    })

}


// um igual só = recebe, dois igual == comparação
// Forma de função padrao
// function Cadastrar(){
// }