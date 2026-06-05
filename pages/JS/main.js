

function alternarTema() {
    var corpo = document.body;
    var botao = document.getElementById("btn-tema");

    if (corpo.classList.contains("tema-claro")) {
        corpo.classList.remove("tema-claro");
        botao.textContent = "𝕷𝖎𝖌𝖍𝖙 𝕿𝖍𝖊𝖒𝖊";
    } else {
        corpo.classList.add("tema-claro");
        botao.textContent = "𝕯𝖆𝖗𝖐 𝕿𝖍𝖊𝖒𝖊";
    }
}


var tamanhoFonte = 16;

function aumentarFonte() {
    if (tamanhoFonte < 26) {
        tamanhoFonte = tamanhoFonte + 2;
        document.documentElement.style.fontSize = tamanhoFonte + "px";
    }
}

function diminuirFonte() {
    if (tamanhoFonte > 12) {
        tamanhoFonte = tamanhoFonte - 2;
        document.documentElement.style.fontSize = tamanhoFonte + "px";
    }
}


function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome == "") {
        alert("Chefe tu esqueceu do nome, preenche aí!");
        return false;
    }

    if (email == "") {
        alert("Bah meu ta faltando o email ai!");
        return false;
    }

    if (mensagem == "") {
        alert("Só falta agora a mensagem né");
        return false;
    }

    alert("Recebi aqui, Valeu!!!, " + nome + "!");
    return true;
}
