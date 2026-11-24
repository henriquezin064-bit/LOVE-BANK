const relationshipCounter = document.getElementById("relationshipCounter");

function atualizarContador() {
    const inicio = new Date(2026, 8, 20, 0, 0, 0);
    const agora = new Date();

    const diferenca = agora - inicio;

    if (diferenca < 0) {
        relationshipCounter.textContent = "Nossa história está prestes a começar! ❤️";
        return;
    }

    const segundosTotais = Math.floor(diferenca / 1000);

    const dias = Math.floor(segundosTotais / 86400);
    const horas = Math.floor((segundosTotais % 86400) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    relationshipCounter.textContent =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos de amor. ❤️`;
}

atualizarContador();

setInterval(atualizarContador, 1000);