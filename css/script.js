// MOBILE MENU
function abrirMenu() {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("ativo");
}

// FORM DE ORÇAMENTO - placeholder até backend
function enviarOrcamento(event) {
    event.preventDefault();
    alert("Seu pedido de orçamento foi enviado. Nossa equipe entrará em contato em breve.");
}

// MENSAGENS (chat placeholder)
function enviarMensagem() {
    let mensagem = document.getElementById("mensagemInput").value;
    if(mensagem.trim() === "") return;

    let chatBox = document.getElementById("chatBox");
    let msg = document.createElement("p");
    msg.className = "msg-enviada";
    msg.innerText = mensagem;

    chatBox.appendChild(msg);
    document.getElementById("mensagemInput").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
