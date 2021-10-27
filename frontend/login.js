var formulario = document.querySelector("form");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.querySelector('[name = "email"]').value;
  var senha = document.querySelector('[name = "senha_de_acesso"]').value;

  postLogin(email, senha);
});

async function postLogin(email, senha) {
  const response = await fetch("http://localhost:3000/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email, senha }),
  });

  if (response.status === 200) {
    // redirecionar para home
    window.location.href = "/frontend/index.html";
  } else {
    alert("erro");
  }
}
