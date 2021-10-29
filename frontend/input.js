function togglePassword() {
  const icone_olho = document.querySelector("#icone_olho");
  var input_senha = document.querySelector('[name = "senha_de_acesso"]');

  const eh_olho_fechado = icone_olho.src.includes("hidden.png");

  if (eh_olho_fechado) {
    icone_olho.src = "icones/eye.png";
    input_senha.type = "text";
  } else {
    icone_olho.src = "icones/hidden.png";
    input_senha.type = "password";
  }
}
