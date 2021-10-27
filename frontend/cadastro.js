// Pega o elemento formulario e bota na variavel formulario
var formulario = document.querySelector("form");

// Manda o formulario escutar o evento de submit, e rodar uma função anônima caso isso aconteça
formulario.addEventListener("submit", function (e) {
  // Impede que o comportamento padrão ocorra, no caso do formulário, esse comportamento é recarregar a página
  e.preventDefault();

  // Pega os inputs nome_completo, email e senha e cria variáveis pegando os valores
  var usuario = document.querySelector('[name = "nome_completo"]').value;
  var email = document.querySelector('[name = "email"]').value;
  var senha = document.querySelector('[name = "senha"').value;

  // Chamando a função postLogin passando usuario, email e senha
  postCadastro(usuario, email, senha);
});

// Criando uma função assíncrona, que recebe usuario, email e senha como parâmetros,
// onde o retorno acontecerá "por baixo dos panos"
async function postCadastro(usuario, email, senha) {
  // Usa o método fetch (do próprio browser) para chamar a API no endereço xxx,
  // passando como segundo parâmetro (opcional), um objeto de configurações
  const response = await fetch("http://localhost:3000/cadastro", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ usuario, email, senha }),
  });

  // Transforma a resposta em json
  var data = await response.json();

  // Se a resposta do usuário estiver correta (status 200),
  // o usuário é encaminhado para a página home
  if (response.status === 200) {
    // Redirecionar para home
    window.location.href = "/frontend/login.html";
    //Se estiver errada(status 400), aparece um alerta de erro com a mensagem retornada na própria API
  } else {
    alert(data.mensagem);
  }
}
