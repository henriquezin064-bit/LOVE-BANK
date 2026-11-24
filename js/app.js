document.addEventListener("DOMContentLoaded", () => {

    // Atualiza automaticamente o ano do rodapé
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Animações de entrada ao rolar a página
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(element => {
            observer.observe(element);
        });

    } else {
        revealElements.forEach(element => {
            element.classList.add("visible");
        });
    }

    // Botão de acesso: será conectado ao sistema de login na próxima etapa
    const accessButton = document.getElementById("accessButton");

    if (accessButton) {
        accessButton.addEventListener("click", () => {
            alert("O acesso exclusivo está sendo preparado. Em breve, sua experiência estará disponível! 💙");
        });
    }

});