function mostrarNome() {
  var nome = document.querySelector(".js-input-name").value;
  //var RG = "834747";
  // var CPF = document.querySelector(".js-input-CPF").value;
  //var Email = document.querySelector(".js-input-email").value;
  var Nota01 = Number(document.querySelector(".js-input-nota01").value);
  var Nota02 = Number(document.querySelector(".js-input-nota02").value);
  var Nota03 = Number(document.querySelector(".js-input-nota03").value);
  // var Media = document.querySelector(".js-input-media").value;
  // var situação = document.querySelector(".js-input-situção").value;

  // alert(nome);

  var aluno = {
    nome: nome,
    //RG:RG,
    // CPF:CPF,
    // Email:Email,
    notas: [Nota01, Nota02, Nota03],
    //Media:Media,
    // situação:situação,
  };

  var media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3;

  //var media = ((aluno.Nota01 + aluno.Nota02 + aluno.Nota03) / 3);

  if (media > 7) {
    console.log("sua media foi " + media + " parabens você passou");
  } else if (media > 5 && media <= 7) {
    console.log("sua media foi " + media + " recuperação");
  } else if (media <= 5) {
    console.log("sua media foi " + media + " reprovou");
  }
}

document.querySelector("a").addEventListener("click", () => mostrarNome());
