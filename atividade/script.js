function validarCampos() {
    if (matricula === "" && senha === "") {
        return "Informe a matrícula e a senha.";
      }
      if (matricula === "") {
        return "Informe a matrícula.";
      }
      if (senha === "") {
        return "Informe a senha.";
      }
      return "";
    }


function login() {
    const matricula = document.getElementById("matricula").Value;
    const senha = document.getElementById("senha").Value;

    const erro = validarCampos(matricula, senha);
    if (erro !== "") {
      mostrarMensagem(erro, "erro");
      return;
    }
}

