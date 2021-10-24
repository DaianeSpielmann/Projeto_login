var formulario = document.querySelector("form");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  var usuario = document.querySelector("#nome_de_usuario").value;
  var senha = document.querySelector("#senha_de_acesso").value;

  postLogin(usuario, senha);
});

async function postLogin(usuario, senha) {
  const response = await fetch("http://localhost:3000/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ usuario, senha }),
  });

  console.log(response.status);
}
