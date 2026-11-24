
const giftBox = document.getElementById("giftBox");
const openGiftButton = document.getElementById("openGiftButton");

const giftReveal = document.querySelector(".gift-reveal");

let presenteAberto = false;

openGiftButton.addEventListener("click", () => {

    if (presenteAberto) return;

    presenteAberto = true;

    giftBox.classList.add("opening");

    openGiftButton.disabled = true;
    openGiftButton.textContent = "Preparando sua surpresa... 💙";

    setTimeout(() => {

        giftReveal.innerHTML = `
            <div class="gift-box" style="font-size: 100px;">
                🎉💝
            </div>

            <h2>Você achou mesmo que eu deixaria seu aniversário passar sem preparar algo especial?</h2>

            <p>
                Minha princesinha Laís, hoje é um dia muito especial,
                porque é o dia de celebrar a existência da pessoa
                que tornou minha vida muito mais bonita.
            </p>

            <div class="birthday-message">
                <h2>Feliz aniversário, minha pequena! ❤️</h2>

                <p>
                    Eu queria poder colocar dentro dessa caixa
                    todos os abraços, beijinhos, sorrisos e momentos
                    felizes que ainda quero viver com você.
                </p>

                <p>
                    Que nunca faltem motivos para sorrir,
                    sonhos para realizar e amor para compartilhar.
                    Quero estar ao seu lado em muitos outros
                    aniversários, comemorando cada conquista sua.
                </p>

                <p>
                    Obrigado por existir e por fazer parte
                    da minha vida. Você merece o mundo inteiro,
                    minha bebê!
                </p>

                <h3>
                    Meu maior presente não está dentro dessa caixa.
                    É ter você na minha vida. ❤️
                </h3>

                <div class="final-bunny">🐰💙</div>

                <p class="gift-signature">
                    Com todo o amor do mundo,<br>
                    Seu menino.
                </p>
            </div>
        `;

        giftReveal.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 1200);

});
