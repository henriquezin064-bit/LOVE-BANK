
document.addEventListener("DOMContentLoaded", () => {

    const password = document.getElementById("password");
    const toggle = document.getElementById("togglePassword");
    const form = document.getElementById("loginForm");
    const message = document.getElementById("loginMessage");

    // Mostrar ou esconder senha
    toggle.addEventListener("click", () => {

        const showing = password.type === "text";

        password.type = showing ? "password" : "text";
        toggle.textContent = showing ? "Mostrar" : "Ocultar";

    });

    // Validação visual provisória
 form.addEventListener("submit", (event) => {
        event.preventDefault();   

        const senhaDigitada = password.value.trim().toLowerCase();

if (!senhaDigitada) {
    message.textContent = "Digite sua senha para continuar.";
    return;
}

if (senhaDigitada !== "sapequices") {
    message.textContent = "Senha incorreta. Tente novamente! 💙";
    return;
}

message.textContent = "Senha correta! Bem-vinda ao LOVE BANK! 💙";

setTimeout(() => {
   window.location.href = "boas-vindas.html"; 
}, 1500);

    });

});
