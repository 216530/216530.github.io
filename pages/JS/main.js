function alternarTema() {
    var corpo = document.body;
    var botao = document.getElementById("btn-tema");
    corpo.classList.toggle("tema-claro");
    botao.textContent = corpo.classList.contains("tema-claro") ? "𝕯𝖆𝖗𝖐 𝕿𝖍𝖊𝖒𝖊" : "𝕷𝖎𝖌𝖍𝖙 𝕿𝖍𝖊𝖒𝖊";
}

var tamanhoFonte = 16;

function aumentarFonte() {
    tamanhoFonte = tamanhoFonte < 26 ? tamanhoFonte + 2 : tamanhoFonte;
    document.documentElement.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
    tamanhoFonte = tamanhoFonte > 12 ? tamanhoFonte - 2 : tamanhoFonte;
    document.documentElement.style.fontSize = tamanhoFonte + "px";
}

function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    var vazio = nome === "" ? "Chefe tu esqueceu do nome, preenche aí!" :
                email === "" ? "Bah meu, tá faltando o e-mail aí!" :
                mensagem === "" ? "Só falta agora a mensagem né" : "";

    vazio && alert(vazio);
    vazio === "" && alert("Recebi aqui, Valeu!!!, " + nome + "!");
    return vazio === "";
}

function voltarTopo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
